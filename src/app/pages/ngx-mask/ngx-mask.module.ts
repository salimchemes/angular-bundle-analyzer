import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskComponent } from './ngx-mask.component';

export const NgBootstrapRoutes: Routes = [
  {
    path: '',
    component: NgxMaskComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(NgBootstrapRoutes)],
})
export class NgxMaskModule {}
