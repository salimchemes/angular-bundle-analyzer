import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'moment',
    loadChildren: () =>
      import('./pages/moment/moment.module').then((m) => m.MomentModule),
  },
  {
    path: 'date-fns',
    loadChildren: () =>
      import('./pages/date-fns/date-fns.module').then((m) => m.DateFnsModule),
  },
  {
    path: 'angular-calendar',
    loadChildren: () =>
      import('./pages/angular-calendar/angular-calendar.module').then(
        (m) => m.AngularCalendarModule
      ),
  },
  {
    path: 'ng-bootstrap',
    loadChildren: () =>
      import('./pages/ng-bootstrap/ng-bootstrap.module').then(
        (m) => m.NgBootstrapModule
      ),
  },
  {
    path: 'ngx-mask',
    loadChildren: () =>
      import('./pages/ngx-mask/ngx-mask.module').then((m) => m.NgxMaskModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
