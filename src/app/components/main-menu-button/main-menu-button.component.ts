import { Component, Input } from '@angular/core';

@Component({
  selector: 'littil-main-menu-button',
  templateUrl: './main-menu-button.component.html',
  styleUrls: ['./main-menu-button.component.scss'],
})
export class MainMenuButtonComponent {
  @Input()
  public active = false;

  @Input()
  public routerLink?: string;
}
