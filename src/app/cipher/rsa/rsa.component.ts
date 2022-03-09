import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class RsaComponent implements OnInit {
  @Output() keyEmmiter =  new EventEmitter<string>();
  key: string = "";

  constructor() { }

  ngOnInit(): void {}


  emitKey() {
    this.keyEmmiter.emit(this.key);
  }
  
}
