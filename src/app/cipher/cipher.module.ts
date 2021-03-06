import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarComponent } from './caesar/caesar.component';
import { GeneralCipherComponent } from './general-cipher/general-cipher.component';
import { FormsModule } from '@angular/forms';
import { ColumnarComponent } from './columnar/columnar.component';
import { DesComponent } from './des/des.component';
import { RsaComponent } from './rsa/rsa.component';



@NgModule({
  declarations: [
    CaesarComponent,
    GeneralCipherComponent,
    ColumnarComponent,
    DesComponent,
    RsaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CipherModule { }
