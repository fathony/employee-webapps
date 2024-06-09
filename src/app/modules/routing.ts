import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path        : 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path      : '',
    redirectTo: '/employee/list',
    pathMatch : 'full',
  },
  {
    path      : '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
