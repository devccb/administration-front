import { Component, Injector } from '@angular/core';
import { Validators } from "@angular/forms";

// component
import { BaseFormComponent } from "../../../shared/components/base-form/base-form.component"

// model
import { Administration } from "../shared/administration.model";

// service
import { AdministrationService } from "../shared/administration.service";

@Component({
  selector: 'app-administration-form',
  templateUrl: './administration-form.component.html',
  styleUrls: ['./administration-form.component.css']
})
export class AdministrationFormComponent extends BaseFormComponent<Administration> {

  constructor(protected administrationService: AdministrationService, protected injector: Injector) {
    super(injector, new Administration(), administrationService, Administration.fromJson)
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      status: [null]
    });
  }

  protected newPageTitle(): string {
    return "Cadastro de Nova Categoria";
  }
}
