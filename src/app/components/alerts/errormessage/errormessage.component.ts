import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-errormessage',
  templateUrl: './errormessage.component.html',
  styleUrls: ['./errormessage.component.css']
})
export class ErrormessageComponent implements OnInit {

  @Input() message: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
