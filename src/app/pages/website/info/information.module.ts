import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentContainerModule} from "../../../components/content-container/content-container.module";
import {RouterModule, Routes} from "@angular/router";
import {InformationComponent} from "./information/information.component";
import {SchoolsComponent} from './schools/schools.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TitleModule } from "../../../components/title/title.module";
import { ModulesComponent } from "./modules/modules.component";

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
  {
    path: 'sponsors',
    component: SponsorsComponent,
  },
  {
    path: 'modules',
    component: ModulesComponent,
  },
];

@NgModule({
  declarations: [
    InformationComponent,
    SchoolsComponent,
    SpecialistsComponent,
    SponsorsComponent,
    ModulesComponent,
  ],
  imports: [
    CommonModule,
    ContentContainerModule,
    RouterModule.forChild(routes),
    TitleModule,
  ]
})
export class InformationModule { }
