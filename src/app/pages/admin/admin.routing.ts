import { Routes } from '@angular/router';
import { AdminAuthGuard } from '../../routing/guards/admin-auth.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    redirectTo: 'complete-profile',
    pathMatch: 'full',
  },
  {
    path: 'complete-profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
    canActivate: [AdminAuthGuard],
  },
];
