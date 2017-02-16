import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    talk = "Wait 5 seconds for the interpolation to come."

    constructor(public navCtrl: NavController) {
	setTimeout(x => this.talk = 'hola!', 5000);
    }

}
