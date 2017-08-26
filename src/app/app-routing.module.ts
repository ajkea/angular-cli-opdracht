import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { APIPaginaComponent } from './pages/apipagina/apipagina.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'formulier',
    component: FormComponent
  },
  {
    path: 'APIPagina',
    component: APIPaginaComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
