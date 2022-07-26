
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './component/contents/contents.component';

const routes: Routes = [
  {path: 'content', component: ContentsComponent},
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
