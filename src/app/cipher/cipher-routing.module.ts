import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import { MonoalphabeticComponent } from './monoalphabetic/monoalphabetic.component';


const routes : Route[] = [
    {path:'monoalphabetic', component: MonoalphabeticComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
