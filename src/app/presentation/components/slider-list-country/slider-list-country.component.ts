import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CovidCountry } from 'src/app/domain/models/covid-country';

@Component({
  selector: 'app-slider-list-country',
  templateUrl: './slider-list-country.component.html',
  styleUrls: ['./slider-list-country.component.scss']
})
export class SliderListCountryComponent implements OnInit {

  @Input() listCovidCountry: CovidCountry[]=[];
  @Output() updatePointMapEvent = new EventEmitter<CovidCountry>();
  
  constructor() { }

  ngOnInit(): void {}

  updatePointMap(covidCountry: CovidCountry) {
    this.updatePointMapEvent.emit(covidCountry);
  }

}
