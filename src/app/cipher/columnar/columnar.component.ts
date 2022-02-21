import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-columnar',
  templateUrl: './columnar.component.html',
  styleUrls: ['./columnar.component.css']
})
export class ColumnarComponent implements OnInit {

  @Output() keyEmmiter =  new EventEmitter<string>();
  key: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  emitKey(inputKey: string) {
   
    let key: string = this.transformToKey(inputKey);

    console.log(key);
    
    if (this.isValidKey(key)) {
      this.keyEmmiter.emit(key);
    }
  }

  transformToKey(inputKey: string): string {

    const withoutDuplicates = Array.from(new Set(inputKey.split(''))).toString();
    const numericOnly = withoutDuplicates.replace(/\D/g,'');

    return numericOnly;
  }

  isValidKey(key: string) {
    
    if (key.length < 1) {
      alert("Key has to contain numbers!");
      return false;
    }

    return true;
  }
  
}
