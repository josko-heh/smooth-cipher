import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class HmacService {

  constructor() { }


  hash(message: string, key: string): string {

    return CryptoJS.HmacSHA256(message, key).toString(CryptoJS.enc.Base64);
  }

}
