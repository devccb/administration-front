import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { ContentHeaderComponent } from './components/content-header/content-header.component';

@NgModule({
  declarations: [
    ContentHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContentHeaderComponent
  ]
})
export class SharedModule { }
