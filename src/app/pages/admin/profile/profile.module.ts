import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentContainerModule } from '../../../components/content-container/content-container.module';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ContentContainerModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [ProfileComponent],
  entryComponents: [],
})
export class ProfilePageModule {}
