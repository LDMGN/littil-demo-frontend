import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../../components/button/button.module';
import { ContainerModule } from '../../components/container/container.module';
import { MainMenuButtonModule } from '../../components/main-menu-button/main-menu-button.module';
import { LoginModalModule } from '../login-modal/login-modal.module';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoginModalModule,
    ButtonModule,
    ContainerModule,
    MainMenuButtonModule,
  ],
  providers: [],
  exports: [HomepageComponent],
  entryComponents: [],
})
export class HomePageModule {
}
