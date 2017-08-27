import { KunstenaarsDetailComponent } from './pages/kunstenaars-detail/kunstenaars-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { APIPaginaComponent } from './pages/apipagina/apipagina.component';
import { LoadingComponent } from './pages/loading/loading.component';


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
  },
  {
    path: 'APIPagina/:priref',
    component: KunstenaarsDetailComponent
  },
  {
    path: 'loading',
    component: LoadingComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
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
