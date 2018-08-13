import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { navigation } from '../globals';
import { NavigationItem } from '../models/navigation-item.model';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  navMenu: Array<NavigationItem>;
  currentIndex: number;
  currentTitle: string;
  currentUrl: string;

  constructor(private router: Router, public media: ObservableMedia) {
    this.navMenu = navigation;

    router.events.subscribe(event => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        const path = event.url.replace('/', '');
        this.currentIndex = this.navMenu.findIndex(
          navItem => navItem.url === path
        );

        this.currentTitle = this.navMenu[this.currentIndex].label;
        this.currentUrl = this.navMenu[this.currentIndex].url;
      }
    });
  }

  onTabChange(index) {
    this.router.navigate([this.navMenu[index].url]);
  }
}
