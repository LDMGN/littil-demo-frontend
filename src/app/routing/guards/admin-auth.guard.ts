import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DemoController } from '../../demo.controller';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private demoController: DemoController) {}

  public canActivate() {
    if (this.demoController.loggedIn) {
      return true;
    } else {
      return this.router.parseUrl('/');
    }
  }
}
