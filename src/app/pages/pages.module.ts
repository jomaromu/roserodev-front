import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// componentes
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

// modulos
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    ProductsComponent,
    ServicesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
  ]
})
export class PagesModule { }
