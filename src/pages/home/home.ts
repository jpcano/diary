import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Talk} from "./Talk";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    talks = [
	new Talk('ionic2', 'jpcano', 'workshop'),
	new Talk('angular2', 'jpcano', 'talk')
    ];

    constructor(public navCtrl: NavController) {

    }

    style(talk) {
	return {
	    'border-color': talk.category == 'workshop' ? 'purple' : 'red',
	    'border-left': '2px solid #00274F',
	    'padding-left': '10px',
	    'margin-bottom': '10px'
	}
    }

    pressMe() {
	console.log('clicked!');
    }

    getAddress(address) {
	console.log(address);
    }
}
