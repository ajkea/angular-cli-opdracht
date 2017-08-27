import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, NgModule } from '@angular/core';
import { KunstenaarsService } from './../../services/kunstenaars.service';
import { Kunstenaar } from './../../domain/kunstenaar';

@Component({
  selector: 'app-apipagina',
  templateUrl: './apipagina.component.html',
  styleUrls: ['./apipagina.component.css']
})
export class APIPaginaComponent implements OnInit {

  
  submitted = false;

  private loaded = false;
  
  onSubmit() { this.submitted = true; }

  constructor(private kunstenaarsService: KunstenaarsService){}

  kunst = [];
  ngOnInit() {
    this.kunstenaarsService.getAllKunstenaars().subscribe(
    data =>{
      this.kunst = data.rubenianumpersonen;
      this.loaded = true;
    })
  }

  selectedKunstenaar: Kunstenaar;

  onSelect(kunstenaar: Kunstenaar): void{
    this.selectedKunstenaar = kunstenaar;
  }
}