import { Component, Input, OnInit } from '@angular/core';
import { CovidCountry } from 'src/app/domain/models/covid-country';
import { CovidCountryItem } from '../../../domain/models/covid-country-item';

@Component({
  selector: 'app-country-more-cases',
  templateUrl: './country-more-cases.component.html',
  styleUrls: ['./country-more-cases.component.scss']
})
export class CountryMoreCasesComponent implements OnInit {

  gradient = true;
  showLegend2: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme = 'nightLights';

  listDataDrawCountry: CovidCountryItem[]=[];

  constructor() {}

  ngOnInit(): void {
  }

  //MetodoPastel
  onSelect(data:any): void {}
  onActivate(data:any): void {}
  onDeactivate(data:any): void {}

  loadDataCountry(listCovidCountry:CovidCountry[]){
    this.listDataDrawCountry=[];
    listCovidCountry = this.getListCountryConfirmedOrder(listCovidCountry);
    for (let i = 0; i < 5; i++) {
      let covidCountryItem = new CovidCountryItem();
      covidCountryItem.name = listCovidCountry[i].countryRegion;
      covidCountryItem.value = listCovidCountry[i].confirmed;
      this.listDataDrawCountry.push(covidCountryItem);
    }
  }

  getListCountryConfirmedOrder(listCovidCountry:CovidCountry[]){
    return listCovidCountry.sort(function(a,b)  {
      if(a.confirmed < b.confirmed){
        return 1;
      }  
      if(a.confirmed > b.confirmed){
        return -1;
      }  
      if(a.confirmed = b.confirmed){
        return 0;
      }  
    });
  };
  
}
