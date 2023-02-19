import { Component, OnInit } from '@angular/core';
import { CovidCountry } from 'src/app/domain/models/covid-country';

@Component({
  selector: 'app-data-general',
  templateUrl: './data-general.component.html',
  styleUrls: ['./data-general.component.scss']
})
export class DataGeneralComponent implements OnInit {
  totalConfirmed=0;
  totalDeaths=0;
  totalRecovered=0;
  constructor() { }

  ngOnInit(): void {
  }
  
  
  loadDataTotalCountry(listCovidCountry:CovidCountry[]){
    this.totalConfirmed=0;
    this.totalDeaths=0;
    this.totalRecovered=0; 
    listCovidCountry.forEach(e=>{
        this.totalConfirmed =this.totalConfirmed + (e.confirmed ?? 0);
        this.totalDeaths = this.totalDeaths + (e.deaths ?? 0);
        this.totalRecovered =this.totalRecovered + (e.recovered ?? 0);
    });
  }

}
