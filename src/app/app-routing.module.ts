import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  // { path: 'inicio', component: MainComponent },
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: AboutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'work', component: WorkComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'about', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
