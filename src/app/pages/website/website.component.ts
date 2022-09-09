import { Component } from '@angular/core';
import { ModalController } from '../../components/modal/modal.controller';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'littil-website',
  templateUrl: './website.component.html',
})
export class WebsiteComponent {
  public menuRoutes = [
    {
      path: '/home',
      menuText: 'Home',
    },
    {
      path: '/about-us',
      menuText: 'Over ons',
    },
    {
      path: '/info',
      menuText: 'Informatie',
    },
    {
      path: '/blog',
      menuText: 'Blog',
    },
    {
      path: '/contact',
      menuText: 'Contact',
    },
    {
      path: '/devoxx4kids',
      menuText: 'Devoxx4Kids',
    },
  ];

  constructor(private modalController: ModalController) {}

  public openLoginModal() {
    return this.modalController.present(LoginModalComponent);
  }
}
