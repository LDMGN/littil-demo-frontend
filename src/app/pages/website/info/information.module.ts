import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentContainerModule} from "../../../components/content-container/content-container.module";
import {RouterModule, Routes} from "@angular/router";
import {InformationComponent} from "./information/information.component";
import {SchoolsComponent} from './schools/schools.component';
import { SpecialistsComponent } from './specialists/specialists.component';

const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
  },
  {
    path: 'schools',
    component: SchoolsComponent,
  },
  {
    path: 'it-specialists',
    component: SpecialistsComponent,
  },
];

@NgModule({
  declarations: [
    InformationComponent,
    SchoolsComponent,
    SpecialistsComponent
  ],
  imports: [
    CommonModule,
    ContentContainerModule,
    RouterModule.forChild(routes),
  ]
})
export class InformationModule { }
