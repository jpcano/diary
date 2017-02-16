import { Component, Input } from '@angular/core';
import {Talk} from "../../pages/home/Talk" 

/*
  Generated class for the TalkRow component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'talk-row-component',
    template: `
    <div [ngStyle]="style()">
      <h3>{{talk.name}}</h3>{{talk.speaker}} {{i}}
    </div>`
})
export class TalkRowComponent {

    @Input()
    talk: Talk;

    text: string;
    
    constructor() {
	console.log('Hello TalkRow Component');
	this.text = 'Hello World';
    }
    
    style() {
	return {
	    'border-color': this.talk.category == 'workshop' ? 'purple' : 'red',
	    'border-left': '2px solid #00274F',
	    'padding-left': '10px',
	    'margin-bottom': '20px'
	}
    }
}
