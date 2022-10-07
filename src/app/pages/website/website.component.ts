import { Component } from '@angular/core';
import { DemoController } from '../../demo.controller';

@Component({
  selector: 'littil-website',
  templateUrl: './website.component.html',
})
export class WebsiteComponent {
  public menuRoutes;

  constructor(public demoController: DemoController) {
    this.menuRoutes = [
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
        subRoutes: [
          {
            path: '/info/schools',
            menuText: 'Scholen',
          },
          {
            path: '/info/it-specialists',
            menuText: 'IT Specialisten',
          },
          {
            path: '/info/sponsors',
            menuText: 'Sponsors',
          },
        ],
      },
      ...(
        demoController.loggedIn
          ?
          [
            {
              path: '/search',
              menuText: 'IT Specialisten',
            },
          ]
          :
          []
      ),
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
  }
}
