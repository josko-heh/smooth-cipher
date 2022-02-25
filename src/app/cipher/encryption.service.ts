import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private alphabetLow: string = 'abcdefghijklmnopqrstuvwxyz';

  constructor() { }


  run(cypher: string, mode: string, input: string, key: string): string {

    if (cypher == "caesar" && mode == "encrypt") {
      return this.encryptCaesar(input, key);
    } else if (cypher == "caesar" && mode == "decrypt") {
      return this.decryptCaesar(input, key);
    } else if (cypher == "columnar" && mode == "encrypt") {
      return this.encryptColumnar(input, key);
    } else if (cypher == "columnar" && mode == "decrypt") {
    return this.decryptColumnar(input, key);
  }

    throw new Error("Internal: Invalid arguments for encryption/decryption!");
  }


  private encryptCaesar(input: string, key: string): string {
    
    const shift = Number(key);

		return [...input].map( inChar => {

			if (!this.isInAlphabet(inChar)) {
				return inChar;
			}


      const isLower: boolean = inChar == inChar.toLowerCase();

      inChar = inChar.toLowerCase();

			const encryptedCharIndex: number = (this.alphabetLow.indexOf(inChar.toLowerCase()) + shift) % this.alphabetLow.length;
			const encryptedCharLow: string = this.alphabetLow[encryptedCharIndex]

			return isLower ? encryptedCharLow : encryptedCharLow.toUpperCase();
		}).join("");
  }

  private decryptCaesar(input: string, key: string): string {
      
    const shift = Number(key);

		return [...input].map( inChar => {

			if (!this.isInAlphabet(inChar)) {
				return inChar;
			}


      const isLower: boolean = inChar == inChar.toLowerCase();

      inChar = inChar.toLowerCase();

			const decryptedCharIndex: number = (this.alphabetLow.indexOf(inChar.toLowerCase()) - shift) % this.alphabetLow.length;
			const decryptedCharLow: string = this.alphabetLow[decryptedCharIndex]

			return isLower ? decryptedCharLow : decryptedCharLow.toUpperCase();
		}).join("");
  }

  private encryptColumnar(input: string, key: string): string {
    let columns: string[][] = [];

    for (let i = 0; i < key.length; i++) {
      let column = [...input].filter( (value, index, Arr) => (index-i) % key.length == 0 );

      columns.push(column);
    }

    let encrypted = "";

    for (let i = 0; i < key.length; i++) {
      encrypted += columns[parseInt(key[i])].join('');
    }
    
    return encrypted;
  }

  private decryptColumnar(input: string, key: string): string {
    let columns: string[][] = [];

    for (let i = 0; i < key.length; i++) {
      let column = [...input].filter( (value, index, Arr) => (index-i) % key.length == 0 );

      columns.push(column);
    }

    console.log(columns);
    

    let decrypted = "";

    for (let i = 0; i < columns.length; i++) {

      let keyCharMap = key.split('').map(function (x, j) { 
        return { key: x, char: columns[i][j] } 
      });

      console.log("keyCharMap:" ,keyCharMap);
      
      decrypted += keyCharMap.sort( (a, b) => parseInt(a.key) - parseInt(b.key) ).map(a => a.char).join('');
    }
    
    return decrypted;
  }

  private isInAlphabet(char: string): boolean {

    if (char.length > 1) {
      throw new Error("Internal: Invalid argument for isInAlphabet check!");
    }

    return this.alphabetLow.includes(char.toLowerCase());
  }

}
