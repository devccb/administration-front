import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainComponent } from './core/components/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'administrations',
        loadChildren: () => import('./pages/administrations/administrations.module').then(m => m.AdministrationsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
