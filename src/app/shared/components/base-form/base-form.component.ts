import { OnInit, AfterContentChecked, Injector, Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { BaseModel } from "../../models/base.model"
import { BaseService } from "../../services/base.service"

@Directive()
export abstract class BaseFormComponent<T extends BaseModel> implements OnInit, AfterContentChecked {

  currentAction: string = '';
  pageTitle: string = '';
  resourceForm: FormGroup = (new FormBuilder()).group({});

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseService<T>,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit() {
    this.setCurrentAction();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  protected setCurrentAction() {
    if (this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }

  protected setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = this.newPageTitle();
    else
      this.pageTitle = this.editPageTitle();
  }

  protected newPageTitle(): string {
    return "Novo"
  }

  protected editPageTitle(): string {
    return "Editar"
  }

}
