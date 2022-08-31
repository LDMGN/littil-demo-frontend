import { Component } from '@angular/core';
import { ModalController } from '../../components/modal/modal.controller';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'littil-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  constructor(private modalController: ModalController) {}

  public openLoginModal() {
    return this.modalController.present(LoginModalComponent);
  }
}
