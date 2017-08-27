import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

import { Location } from '@angular/common'

import { KunstenaarsService } from './../../services/kunstenaars.service';
import { Kunstenaar } from './../../domain/kunstenaar';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-kunstenaars-detail',
  templateUrl: './kunstenaars-detail.component.html',
  styleUrls: ['./kunstenaars-detail.component.css']
})
export class KunstenaarsDetailComponent implements OnInit {

  @Input() kunstenaar: Kunstenaar;

  ngOnInit(): void{
    // this.route.paramMap
    // .switchMap((params:ParamMap) => this.kunstenaarService.getAllKunstenaars(+params.get('priref')))
    // .subscribe(kunstenaar => this.kunstenaar = kunstenaar);
  }

  constructor(
    private kunstenaarService: KunstenaarsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
}
