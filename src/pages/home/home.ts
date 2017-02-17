import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Talk} from "./Talk";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import {TalkService} from "../../providers/talk-service";

@Component({
    selector: 'page-home',
    providers: [TalkService],
    templateUrl: 'home.html'
})
export class HomePage {

    talks: any;
    showAddTalk: boolean = false;

    constructor(public navCtrl: NavController, public talkService: TalkService) {
	this.talks = this.talkService.getTalks();
	// this.talkService.post();
    }
    
    pressMe() {
	console.log('clicked!');
    }

    getAddress(address) {
	console.log(address);
    }

    onClick($event) {
	console.log($event);
    }

    showAddTalkPanel() {
	this.showAddTalk = !this.showAddTalk
    }

}
