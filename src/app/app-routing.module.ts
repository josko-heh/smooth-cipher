import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralCipherComponent } from './cipher/general-cipher/general-cipher.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'cipher', component: GeneralCipherComponent },
  { path: '**', component: MainPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
