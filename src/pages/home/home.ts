import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Talk} from "./Talk";

import {Headers, RequestOptions, Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import {TalkService} from "../../providers/talk-service";

@Component({
    selector: 'page-home',
    providers: [TalkService],
    templateUrl: 'home.html'
})
export class HomePage {

    talks: Array<Talk>;

    constructor(public navCtrl: NavController, public talkService: TalkService) {
	this.talkService.getTalks().subscribe(x => { this.talks = x });
	// this.talkService.post();
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
