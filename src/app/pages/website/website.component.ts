import { Component, OnInit } from '@angular/core';
import { DemoController } from '../../demo.controller';

@Component({
  selector: 'littil-website',
  templateUrl: './website.component.html',
})
export class WebsiteComponent implements OnInit {
  public menuRoutes: any[];

  constructor(public demoController: DemoController) {
    this.menuRoutes = this.getMenuItems(false);
  }

  public ngOnInit(): void {
    this.demoController.loggedInStatus.subscribe({
      next: (isLoggedIn) => this.menuRoutes = this.getMenuItems(isLoggedIn),
    })
  }

  private getMenuItems(isLoggedIn: boolean): any[] {
    return [
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
          {
            path: '/info/modules',
            menuText: 'Modules',
          },
        ],
      },
      ...(
        isLoggedIn
          ?
          [
            {
              path: '/search',
              menuText: 'Zoeken',
            },
          ]
          :
          []
      ),
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
