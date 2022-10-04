import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoController {
  public registered = false;
  public loggedIn = false;

  public demoName = 'Eddy Vos';
  public demoEmail = 'eddy.vos@email.com';
  public demoPassword = 'ditisgeenechtwachtwoord';
}
