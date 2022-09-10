import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentContainerModule} from "../../../components/content-container/content-container.module";
import {RouterModule, Routes} from "@angular/router";
import {InformationComponent} from "./information/information.component";

const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
  },
];

@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    ContentContainerModule,
    RouterModule.forChild(routes),
  ]
})
export class InformationModule { }
