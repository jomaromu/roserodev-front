import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos
import { PagesModule } from './pages/pages.module';

// scripts
import { Puntero } from './scripts/puntero';
import { Whatsapp } from './scripts/whatsapp';
import { BotonResponsivo } from './scripts/boton-responsivo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [Puntero, Whatsapp, BotonResponsivo],
  bootstrap: [AppComponent]
})
export class AppModule { }
