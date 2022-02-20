import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarComponent } from './caesar/caesar.component';
import { GeneralCipherComponent } from './general-cipher/general-cipher.component';



@NgModule({
  declarations: [
    CaesarComponent,
    GeneralCipherComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CipherModule { }
