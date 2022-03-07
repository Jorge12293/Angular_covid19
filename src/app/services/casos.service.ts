import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators';
import { PaisConfirmados } from '../clases/PaisConfirmados';

@Injectable({
  providedIn: 'root'
})
export class CasosService {
 
  private urlG:string= 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest';
  private ulrCasosGeneral:string= 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief';
 
  /*
  private ulrCasosGeneral: string =  'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief';
  private urlCasosPais: string = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?onlyCountries=true';
*/

  resultadoGeneral: any; 
  casosPais: any[any] = [];
  paises: any[any] = [];
  casos: any[any] = [];
  casosGeneral:any;
  listaPaisConfirmados: PaisConfirmados[] = [];
  

  constructor(private http: HttpClient) {}

  getDataCovid(){
    return this.http.get(this.urlG)
    .pipe( 
      map ( (resp: any) =>{
        localStorage.setItem('dataCovidPaises',JSON.stringify(resp));
        return resp;
      })
    ); 
  }

  getResultadoGeneral(){
    
     return this.http.get(this.ulrCasosGeneral)
      .pipe( 
        map ( (resp: any) =>{
         // console.log(resp);
          localStorage.setItem('dataResultadoGeneral',JSON.stringify(resp));
          return resp;
        })
      );   
  }



  /*
  getUtlimaFechaActualizacion(){
    this.casosPais=JSON.parse(localStorage.getItem('dataCasosPais')); 
    var fecha=this.casosPais[0].lastupdate;
    for (var key in this.casosPais[0].timeseries) {
      fecha= key;
      return fecha;
    }
    
    return fecha;
  }

  */


  getListaPaisesConfirmados() {
    this.casosPais=JSON.parse(localStorage.getItem('dataCovidPaises'));
    // Guardar en un array (pais, casos confirmados)
    
    for (var i = 0; i < this.casosPais.length; i++) {
      var paisConfirmados = new PaisConfirmados();
      paisConfirmados.name= this.casosPais[i].countryregion,
      //paisConfirmados.casos= this.casosPais[i].timeseries[fecha].confirmed
      paisConfirmados.casos= this.casosPais[i].confirmed;     
      this.listaPaisConfirmados.push(paisConfirmados);
     }
     this.getListaPaisesConfirmdaosOrdenados();
     return this.listaPaisConfirmados;
  }


  getListaPaisesConfirmdaosOrdenados(){
    // Ordenar de Mayor a menor
   return this.listaPaisConfirmados.sort(function(a,b)  {
           if(a.casos < b.casos){
             return 1;
           }  
           if(a.casos > b.casos){
             return -1;
           }  
           if(a.casos = b.casos){
             return 0;
           }  
   });
 }























}


  
  //General https://github.com/Laeyoung/COVID-19-API
  //https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief
