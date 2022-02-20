import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncryptionService } from '../encryption.service';

@Component({
  selector: 'app-general-cipher',
  templateUrl: './general-cipher.component.html',
  styleUrls: ['./general-cipher.component.css']
})
export class GeneralCipherComponent implements OnInit {


  selectedCipher: string = "";
  mode: string = "encrypt";
  shift: number = 0;
  inputText: string = "";
  outputText: string = "";
  


  constructor(private route: ActivatedRoute, private encryptionService: EncryptionService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {this.selectedCipher = params.selected;} );
  }


  isSupported(cipher: string): boolean {

    if (cipher === "caesar") {
      return true;
    }

    return false;
  }

  setMode(toSet: string): void {
    this.mode = toSet;
  }

  run(): void {
    this.outputText = this.encryptionService.run(this.selectedCipher, this.mode, this.inputText, this.shift);
  }

}
