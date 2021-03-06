import { Component } from '@angular/core';
import {TalkService} from "../../providers/talk-service";
import {Talk} from "../../pages/home/Talk" 
import { FormControl } from '@angular/forms'

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

    name : FormControl;
    
    constructor(public talkService: TalkService) {
    }

    // addTalk(name, speaker) {
    // 	let talk = new Talk(name, speaker, "workshop");
    // 	this.talkService.addTalk(talk).subscribe(x => console.log(x));
    // }

    addTalk(form) {
	this.name = form.controls.name;
	this.name.hasError('required');
	console.log(form, this.name);
	// let talk = new Talk(name, speaker, "workshop");
	// this.talkService.addTalk(talk).subscribe(x => console.log(x));
    }

}
