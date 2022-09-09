import { Component, DoCheck, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'littil-main-menu-button',
  templateUrl: './main-menu-button.component.html',
})
export class MainMenuButtonComponent implements DoCheck {
  public active = false;
  @Input()
  public routerLink?: string;

  constructor(private elRef: ElementRef) {}

  ngDoCheck() {
    this.active = this.elRef.nativeElement.classList.contains('active-link');
  }
}
