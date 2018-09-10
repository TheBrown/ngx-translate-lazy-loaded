import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log("kuy is running")
  }

  public changeLanguage(language) {
    this.translate.use(language);
  }

}
