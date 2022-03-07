import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit {
  @Output() keyEmmiter =  new EventEmitter<string>();
  key: string = "";

  constructor() { }

  ngOnInit(): void {}


  emitKey(inputKey: string) {
    this.key = inputKey;
  }
}
