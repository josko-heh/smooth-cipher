import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarComponent } from './caesar/caesar.component';
import { GeneralCipherComponent } from './general-cipher/general-cipher.component';
import { FormsModule } from '@angular/forms';
import { ColumnarComponent } from './columnar/columnar.component';



@NgModule({
  declarations: [
    CaesarComponent,
    GeneralCipherComponent,
    ColumnarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CipherModule { }
