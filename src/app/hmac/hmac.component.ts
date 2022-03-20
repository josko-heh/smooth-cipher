import { Component, OnInit } from '@angular/core';
import { HmacService } from './hmac.service';

@Component({
  selector: 'app-hmac',
  templateUrl: './hmac.component.html',
  styleUrls: ['./hmac.component.css']
})
export class HmacComponent implements OnInit {


  key: string = "";

  inputText: string = "Input";
  outputText: string = "Output";

  constructor(private hmacService: HmacService) { }

  ngOnInit(): void {
  }


  run() {
    this.outputText = this.hmacService.hash(this.inputText, this.key);
  }

}
