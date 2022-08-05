import { Component } from '@angular/core';
import { ModalController } from '../../components/modal/modal.controller';
import { LoginModalComponent, LoginType } from '../login-modal/login-modal.component';

@Component({
  selector: 'littil-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  LoginType = LoginType;

  constructor(private modalController: ModalController) {
  }

  public openLoginModal(type: LoginType) {
    return this.modalController.present(LoginModalComponent, {type: type});
  }
}
