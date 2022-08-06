import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { ContentsComponent } from './component/contents/contents.component';
import { FooterComponent } from './component/footer/footer.component';
import { AlimentosComponent } from './component/alimentos/alimentos.component';
import { JuguetesComponent } from './component/juguetes/juguetes.component';
import { RopaComponent } from './component/ropa/ropa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentsComponent,
    FooterComponent,
    AlimentosComponent,
    JuguetesComponent,
    RopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
