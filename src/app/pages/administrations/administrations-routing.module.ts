import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AdministrationListComponent } from './administration-list/administration-list.component';
import { AdministrationFormComponent } from './administration-form/administration-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationListComponent
  },
  {
    path: 'new',
    component: AdministrationFormComponent
  },
  {
    path: 'edit/:id',
    component: AdministrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationsRoutingModule { }
