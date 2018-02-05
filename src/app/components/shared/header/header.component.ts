import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Output() dato: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle(){
  	console.log("click");
  	this.dato.emit("emitiendo dato desde el header");
  }

}
