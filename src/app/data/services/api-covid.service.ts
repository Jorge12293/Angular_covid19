import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ConvertListCovidCountry, CovidCountry } from '../../domain/models/covid-country';
import { environment } from '../../../environments/environment';

export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): O;
  abstract mapTo(param: O): I;
}

@Injectable({
  providedIn: 'root'
})


export class ApiCovidService {

  private urlListCountry :string=`${environment.urlApiCovid}/jhu-edu/latest`;

  constructor(private http: HttpClient) { }


  getListCovidCountry(): Observable<CovidCountry[]>{
      return this.http.get<CovidCountry[]>(this.urlListCountry).pipe(
        map( resp => {
            resp = resp.map(covidCountry=>{
              return {
                countryRegion:covidCountry.countryregion,
                ...covidCountry,
              };
            });
            return ConvertListCovidCountry.toAPICovidListCountry(JSON.stringify(resp));
          }
        )
      );
  }



}


