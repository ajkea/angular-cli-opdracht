import { Component, OnInit } from '@angular/core';
import { KunstenaarsService } from './../../services/kunstenaars.service';
import { Kunstenaar } from './../../domain/kunstenaar';
@Component({
  selector: 'app-apipagina',
  templateUrl: './apipagina.component.html',
  styleUrls: ['./apipagina.component.css']
})
export class APIPaginaComponent implements OnInit {

  kunstenaarsService: KunstenaarsService
  constructor() { }

  kunst = [];
  ngOnInit() {
    this.kunstenaarsService.getAllKunstenaars().subscribe(
    data =>{
      this.kunst = data.rubenianumpersonen;
      console.log(this.kunst);
    })
  }
}