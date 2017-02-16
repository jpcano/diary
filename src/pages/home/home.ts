import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Talk} from "./Talk";

import {Headers, RequestOptions, Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    talks: Array<Talk>;

    constructor(public navCtrl: NavController, public http: Http) {
	let headers = new Headers({'Content-Type': 'application/json'});
	let options = new RequestOptions({headers: headers});
	this.http.get('http://data.agenda.wedeploy.io/talks', options)
	    .do(x => console.log(x))
	    .map(res => res.json())
	    .subscribe(x => this.talks = x)
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
