import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CipherModule } from './cipher/cipher.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CipherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
