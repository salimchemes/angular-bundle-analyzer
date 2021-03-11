import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularCalendarComponent } from './angular-calendar.component';

export const AngularCalendarRoutes: Routes = [
  {
    path: '',
    component: AngularCalendarComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(AngularCalendarRoutes)],
})
export class AngularCalendarModule {}
