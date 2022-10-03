import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './components/button/button.module';
import { ContentContainerModule } from './components/content-container/content-container.module';
import { LoginModalModule } from './components/login-modal/login-modal.module';
import { ModalControllerModule } from './components/modal/modal.controller.module';
import { RegisterModalModule } from './components/register-modal/register-modal.module';
import { DemoController } from './demo.controller';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalControllerModule.forRoot(),
    ContentContainerModule,
    ButtonModule,
    LoginModalModule,
    RegisterModalModule,
  ],
  providers: [DemoController],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
