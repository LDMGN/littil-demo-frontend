import { Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';

export const websiteRoutes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        data: {
          menuText: 'Home',
        },
        loadChildren: () =>
          import('./homepage/homepage.module').then((m) => m.HomePageModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
