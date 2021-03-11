import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFnsComponent } from './date-fns.component';
import { RouterModule, Routes } from '@angular/router';

export const DateFnsRoutes: Routes = [
  {
    path: '',
    component: DateFnsComponent,
  },
];

@NgModule({
  declarations: [DateFnsComponent],
  imports: [CommonModule, RouterModule.forChild(DateFnsRoutes)],
})
export class DateFnsModule {}
