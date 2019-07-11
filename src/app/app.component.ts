import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ThemeService} from './theme.service';


const themes = {
    dark: {
        primary: '#ba555a',
        secondary: '#FCFF6C',
        tertiary: '#FE5F55',
        medium: '#ffffff',
        dark: '#f7f7ff',
        light: '#474a4f'
    },
    light: {
        primary: '#39BFBD',
        secondary: '#4CE0B3',
        tertiary: '#FF5E79',
        light: '#ffffff',
        medium: '#B682A5',
        dark: '#34162A'
    }
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'help-circle-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeService
  ) {
    this.initializeApp();
  }

    changeTheme(name) {
        this.themeService.setTheme(themes[name]);
    }

    initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
