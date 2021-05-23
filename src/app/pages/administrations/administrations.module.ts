import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationsRoutingModule } from './administrations-routing.module';

// modules
import { SharedModule } from '../../shared/shared.module';

// components
import { AdministrationListComponent } from './administration-list/administration-list.component';
import { AdministrationFormComponent } from './administration-form/administration-form.component';

@NgModule({
  declarations: [
    AdministrationListComponent,
    AdministrationFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdministrationsRoutingModule
  ]
})
export class AdministrationsModule { }
