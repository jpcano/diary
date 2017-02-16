import { Component, Input } from '@angular/core';
import {Talk} from "../../pages/home/Talk" 

/*
  Generated class for the TalkRow component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'talk-row-component',
    template: `{{talk.speaker}}`
})
export class TalkRowComponent {

    text: string;

    @Input()
    talk: Talk;
    
    constructor() {
	console.log('Hello TalkRow Component');
	this.text = 'Hello World';
    }

}
