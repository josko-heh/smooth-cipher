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


  emitKey() {
   
    const transformedKey: string = this.transformToKey(this.key);

    if (this.isValidKey(transformedKey)) {
      this.keyEmmiter.emit(transformedKey);
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

    if (key.indexOf("0") == -1) {
      alert("Key has to contain '0'!");
      return false;
    }

    const sortedKey = key.split('').map(char => parseInt(char)).sort();
    const differenceAry = sortedKey.slice(1).map(function(n, i) { return n - sortedKey[i] });

    if (!differenceAry.every(value => value == 1)) {
      alert("Key must contain consecutive numbers!");
      return false;
    }

    return true;
  }
  
}
