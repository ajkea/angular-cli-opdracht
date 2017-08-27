import { HttpModule } from '@angular/http';
import { KunstenaarsService } from './services/kunstenaars.service';
import { Kunstenaar } from './domain/kunstenaar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { APIPaginaComponent } from './pages/apipagina/apipagina.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { KunstenaarsDetailComponent } from './pages/kunstenaars-detail/kunstenaars-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    APIPaginaComponent,
    PageNotFoundComponent,
    KunstenaarsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [KunstenaarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
