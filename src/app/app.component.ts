import { Component} from '@angular/core';
import { ApiCovidService } from './data/services/api-covid.service';
import { CovidCountry } from './domain/models/covid-country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title   = 'covid19';
  listCovidCountry:CovidCountry[]=[];
 
  constructor(
    private apiCovidService:ApiCovidService,
  ) {
    setTimeout( () => { 
      this.loadDataCountry();
    }, 1500 );
  }
  
  
  loadDataCountry(){
    this.apiCovidService.getListCovidCountry().subscribe(
      (resp:CovidCountry[])=>{
        this.listCovidCountry=resp;
      },
      error=>{
        console.log(error);
        this.loadDataCountryLocal();
      }
    );
  }

  loadDataCountryLocal(){
    this.apiCovidService.getListCovidCountryLocal().subscribe(
      (resp:CovidCountry[])=>{
        this.listCovidCountry=resp;
      },
      error=>{
        console.log(error);
      }
    );
  }

}



