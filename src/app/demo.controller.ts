import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DemoController {
  public registered = false;
  public loggedInStatus = new BehaviorSubject<boolean>(false);
  public isLoggedIn = false;

  public demoName = 'Eddy Vos';
  public demoEmail = 'eddy.vos@email.com';
  public demoPassword = 'ditisgeenechtwachtwoord';

  logIn() {
    this.isLoggedIn = true;
    this.emitLoggedInStatus();
  }

  logOut() {
    this.isLoggedIn = false;
    this.emitLoggedInStatus();
  }

  private emitLoggedInStatus() {
    this.loggedInStatus.next(this.isLoggedIn);
  }
}
