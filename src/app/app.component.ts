import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ModalController } from './components/modal/modal.controller';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { DemoController } from './demo.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    public demoController: DemoController,
    private modalController: ModalController,
    private router: Router
  ) {}

  public openRegisterModal() {
    return this.modalController.present(RegisterModalComponent);
  }

  public openLoginModal() {
    return this.modalController.present(LoginModalComponent).then(() => {
      this.router.navigateByUrl('/search');
    });
  }

  public logOut(): void {
    this.demoController.logOut();
    this.router.navigateByUrl('/home');
  }
}
