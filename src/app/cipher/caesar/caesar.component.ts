import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent implements OnInit {

  @Output() shiftEmmiter =  new EventEmitter<number>();
  shift: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  emitShift(value: number) {
    if (this.isValidShift(value)) {
      this.shiftEmmiter.emit(value);
    }
  }


  private isValidShift(value: number): boolean {
    if (value < 0 || value > 25) {
      alert("Enter shift between 0 and 25 (inclusive)!");
      return false;
    }

    return true;
  }

}

