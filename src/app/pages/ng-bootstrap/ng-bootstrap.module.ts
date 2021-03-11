import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgBootstrapComponent } from './ng-bootstrap.component';

export const NgBootstrapRoutes: Routes = [
  {
    path: '',
    component: NgBootstrapComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(NgBootstrapRoutes)],
})
export class NgBootstrapModule {}
