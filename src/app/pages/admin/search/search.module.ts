import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule, Routes } from '@angular/router';
import { ContentContainerModule } from '../../../components/content-container/content-container.module';
import { SearchComponent } from './search.component';
import { ButtonModule } from "../../../components/button/button.module";
import { MatCheckboxModule } from "@angular/material/checkbox";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
];

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    ContentContainerModule,
    RouterModule.forChild(routes),
    ButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  exports: [SearchComponent],
  entryComponents: [],
})
export class SearchPageModule {}
