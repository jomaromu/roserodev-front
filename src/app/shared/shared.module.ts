import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// componentes
import { SidebarComponent } from './sidebar/sidebar.component';
import { KnopComponent } from './knop/knop.component';
import { ChartsModule } from 'ng2-charts';
import { ShowProjectComponent } from './show-project/show-project.component';


// modulos externos
import {LayoutModule} from '@angular/cdk/layout';


@NgModule({
  declarations: [
    SidebarComponent,
    KnopComponent,
    ShowProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ChartsModule,
    LayoutModule
  ],
  exports: [
    SidebarComponent,
    KnopComponent,
    ShowProjectComponent
  ]
})
export class SharedModule { }
