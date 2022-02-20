import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private alphabetLow: string = 'abcdefghijklmnopqrstuvwxyz';

  constructor() { }


  run(cypher: string, mode: string, input: string, n?: number): string {

    if (cypher == "caesar" && mode == "encrypt" && typeof n !== 'undefined') {
      return this.encryptCaesar(input, n);
    }

    throw new Error("Internal: Invalid arguments for encryption/decryption!");
  }


  private encryptCaesar(input: string, n: number): string {
    
    const inArray = [...input];

		return inArray.map( inChar => {

			if (!this.isInAlphabet(inChar)) {
				return inChar;
			}


      var isLower: boolean = inChar == inChar.toLowerCase();

      inChar = inChar.toLowerCase();

			var encryptedCharIndex: number = (this.alphabetLow.indexOf(inChar.toLowerCase()) + n) % this.alphabetLow.length;
			const encryptedCharLow: string = this.alphabetLow[encryptedCharIndex]

			return isLower ? encryptedCharLow : encryptedCharLow.toUpperCase();
		}).join("");
  }


  private isInAlphabet(char: string): boolean {

    if (char.length > 1) {
      throw new Error("Internal: Invalid argument for isInAlphabet check!");
    }

    if (this.alphabetLow.indexOf(char.toLowerCase()) === -1) {
      return false;
    }

    return true;
  }

}
