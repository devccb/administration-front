import { Injectable, Injector } from '@angular/core';
import { Administration } from "./administration.model";

import { BaseService } from "../../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class AdministrationService extends BaseService<Administration> {

  constructor(protected injector: Injector) {
    super('/v1/administrations', injector, Administration.fromJson);
  }

}
