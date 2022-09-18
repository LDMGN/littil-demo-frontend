import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from './api/generated';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalControllerModule } from './components/modal/modal.controller.module';
import { ContentContainerModule } from "./components/content-container/content-container.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApiModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalControllerModule.forRoot(),
    ContentContainerModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
