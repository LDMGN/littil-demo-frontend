import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentContainerModule} from "../../../components/content-container/content-container.module";
import {RouterModule, Routes} from "@angular/router";
import {InformationComponent} from "./information/information.component";
import {SchoolsComponent} from './schools/schools.component';

const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
  },
  {
    path: 'schools',
    component: SchoolsComponent,
  },
];

@NgModule({
  declarations: [
    InformationComponent,
    SchoolsComponent
  ],
  imports: [
    CommonModule,
    ContentContainerModule,
    RouterModule.forChild(routes),
  ]
})
export class InformationModule { }
