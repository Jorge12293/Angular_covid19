import { Component, Input, OnInit } from '@angular/core';
import { CovidCountry } from 'src/app/domain/models/covid-country';
import { CovidCountryItem } from 'src/app/domain/models/covid-country-item';

@Component({
  selector: 'app-compare-across-countries',
  templateUrl: './compare-across-countries.component.html',
  styleUrls: ['./compare-across-countries.component.scss']
})
export class CompareAcrossCountriesComponent implements OnInit {
  
  @Input() listCovidCountry: CovidCountry[]=[];

  intervalCompareCountries;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Confirmados';
  showYAxisLabel = true;
  yAxisLabel = 'Paises';
  colorScheme = 'nightLights';

  listDataDrawCountry: CovidCountryItem[]=[];

  constructor() { 
    this.intervalCompareCountries = setInterval(()=>{
      this.listDataDrawCountry=[];
      for (let i = 0; i < 5; i++) {
        const numRandom = this.getRandomInt(0,this.listCovidCountry.length);
        let covidCountryItem = new CovidCountryItem();
        covidCountryItem.name =  this.listCovidCountry[numRandom].countryRegion;
        covidCountryItem.value = this.listCovidCountry[numRandom].confirmed;
        this.listDataDrawCountry.push(covidCountryItem);
      }
    },3000);
  }
  

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalCompareCountries);
  }
  
  onSelect(event) {}

  getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
