
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './component/contents/contents.component';
import { AlimentosComponent } from './component/alimentos/alimentos.component';
import { JuguetesComponent } from './component/juguetes/juguetes.component';
import { RopaComponent } from './component/ropa/ropa.component';

const routes: Routes = [
  {path: 'content', component: ContentsComponent},
  {path: 'alimento', component: AlimentosComponent},
  {path: 'juguete', component: JuguetesComponent},
  {path: 'ropa', component: RopaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'content'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule,
  FormsModule,
  HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
