import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-cipher',
  templateUrl: './general-cipher.component.html',
  styleUrls: ['./general-cipher.component.css']
})
export class GeneralCipherComponent implements OnInit {


  selectedCipher: string = "";
  type: string = "encrypt";

  


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {this.selectedCipher = params.selected;} );
  }


  isSupported(cipher: string): boolean {

    if (cipher === "caesar") {
      return true;
    }

    return false;
  }

  setType(toSet: string): void {
    this.type = toSet;
  }

}
