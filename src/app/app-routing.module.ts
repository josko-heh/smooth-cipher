import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CipherModule } from './cipher/cipher.module';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'cipher', loadChildren: () => CipherModule },
  { path: '**', component: MainPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
