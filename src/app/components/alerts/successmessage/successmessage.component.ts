import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-successmessage',
  templateUrl: './successmessage.component.html',
  styleUrls: ['./successmessage.component.css']
})
export class SuccessmessageComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
