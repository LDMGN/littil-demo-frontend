import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from "@angular/router";
import { ContentContainerModule } from "../../../components/content-container/content-container.module";
import { TitleModule } from "../../../components/title/title.module";

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContentContainerModule,
    TitleModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactModule { }
