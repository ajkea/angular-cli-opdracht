import { KunstenaarsService } from './services/kunstenaars.service';
import { Kunstenaar } from './domain/kunstenaar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { APIPaginaComponent } from './pages/apipagina/apipagina.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    APIPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KunstenaarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
