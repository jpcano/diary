import { Component } from '@angular/core';
import {TalkService} from "../../providers/talk-service";
import {Talk} from "../../pages/home/Talk" 

/*
  Generated class for the AddTalk component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'add-talk',
    templateUrl: 'add-talk.html',
    providers: [TalkService]
})

export class AddTalkComponent {

    constructor(public talkService: TalkService) {
    }

    // addTalk(name, speaker) {
    // 	let talk = new Talk(name, speaker, "workshop");
    // 	this.talkService.addTalk(talk).subscribe(x => console.log(x));
    // }

    addTalk(form) {
	console.log(form);
	// let talk = new Talk(name, speaker, "workshop");
	// this.talkService.addTalk(talk).subscribe(x => console.log(x));
    }

}
