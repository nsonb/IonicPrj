import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginRegisterPage } from '../login-register/login-register';
import { MediaProvider } from '../../providers/media/media';
import { LogoutPage } from '../logout/logout';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  loginRegisterRoot = LoginRegisterPage;
  logoutRoot = LogoutPage;
  constructor(public navCtrl: NavController, public mediaProvider: MediaProvider) {}

}
