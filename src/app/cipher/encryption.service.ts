import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as NodeRSA from 'node-rsa';

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
    } else if (cypher == "des" && mode == "encrypt") {
      return this.encryptDes(input, key);
    } else if (cypher == "des" && mode == "decrypt") {
      return this.decryptDes(input, key);
    } else if (cypher == "rsa" && mode == "encrypt") {
      return this.encryptRsa(input, key);
    } else if (cypher == "rsa" && mode == "decrypt") {
      return this.decryptRsa(input, key);
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
    let columnLength = Math.ceil(input.length / key.length);

    let nullCells: {row:number, col:number}[] = [];
    let numOfNullCells = (columnLength * key.length) - input.length;

    let keyCharIndexCounter = key.length - 1;
    for (let i = 0; i < numOfNullCells; i++) {
      nullCells.push({row:columnLength-1, col:parseInt(key[keyCharIndexCounter])});
      keyCharIndexCounter--;
    }
    
    let charCounter = 0;

    for (let i = 0; i < key.length; i++) {
      let column: string[] = [];

      for (let j = 0; j < columnLength; j++) {
        
        if (charCounter == input.length) {
          break;
        }
        
        if (!isNullCell({row:j, col:i})) {
          column.push(input[charCounter])
          charCounter++;
        }
      }

      columns.push(column);
    }


    let decrypted = "";

    for (let i = 0; i < columnLength; i++) {

      let keyCharMap = key.split('').map(function (x, j) { 
        return { key: x, char: columns[j][i] } 
      });

      decrypted += keyCharMap.sort( (a, b) => parseInt(a.key) - parseInt(b.key) ).map(a => a.char).join('');
    }
    
    return decrypted;


    function isNullCell(cell: {row:number, col:number}) {
      for (let i = 0; i < nullCells.length; i++) {
        if (cell.row == nullCells[i].row && cell.col == nullCells[i].col) {
          return true;
        }
      }
      return false;
    }
  }

  private encryptDes(input: string, key: string): string {

    return CryptoJS.DES.encrypt(input, key).toString();
  }

  private decryptDes(input: string, key: string): string {

    return CryptoJS.DES.decrypt(input, key).toString(CryptoJS.enc.Utf8);
  }

  private encryptRsa(input: string, key: string): string {

    return new NodeRSA(key).encrypt(input, 'base64'); // ili utf8?
  }

  private decryptRsa(input: string, key: string): string {

    return new NodeRSA(key).decrypt(input, 'utf8');
  }


  private isInAlphabet(char: string): boolean {

    if (char.length > 1) {
      throw new Error("Internal: Invalid argument for isInAlphabet check!");
    }

    return this.alphabetLow.includes(char.toLowerCase());
  }

}
