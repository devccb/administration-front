import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// environment
import { environment } from '../../../environments/environment';

// models
import { BaseModel } from "../models/base.model";

export abstract class BaseService<T extends BaseModel> {
  protected http: HttpClient;
  private url: string = '';

  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ){
    this.http = injector.get(HttpClient);
    this.url = environment.apiUrl + apiPath;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<T> {
    const url = `${this.url}/${id}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }

  create(resource: T): Observable<T> {
    return this.http.post(this.url, resource).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }

  update(resource: T): Observable<T> {
    const url = `${this.url}/${resource.id}`;

    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }

  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];

    jsonData.forEach(
      element => resources.push( this.jsonDataToResourceFn(element) )
    );

    return resources;
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected handleError(error: any): Observable<any>{
    console.log("Error: ", error);

    return throwError(error);
  }
}
