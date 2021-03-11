import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentComponent } from './moment.component';
import { RouterModule, Routes } from '@angular/router';
export const MomentRoutes: Routes = [
  {
    path: '',
    component: MomentComponent,
  },
];

@NgModule({
  declarations: [MomentComponent],
  imports: [CommonModule, RouterModule.forChild(MomentRoutes)],
})
export class MomentModule {}
