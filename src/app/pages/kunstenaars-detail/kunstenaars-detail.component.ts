import { Component, OnInit } from '@angular/core';
import { KunstenaarsService } from './../../services/kunstenaars.service';
import { Kunstenaar } from './../../domain/kunstenaar';
@Component({
  selector: 'app-kunstenaars-detail',
  templateUrl: './kunstenaars-detail.component.html',
  styleUrls: ['./kunstenaars-detail.component.css']
})
export class KunstenaarsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
