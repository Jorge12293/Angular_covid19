import { Component} from '@angular/core';
import { CasosService } from './services/casos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'covid19';
  dataCasosPais: any[any] = [];
  dataCasosPais2: any[any] = [];

  constructor(private datoseService : CasosService) { 

    setTimeout( () => { 

      this.datoseService.getDataCovid()
      .subscribe(data=>{
        this.dataCasosPais=data;
      });

      this.datoseService.getResultadoGeneral()
      .subscribe(); 
      /*
      this.datoseService.getCasosPais()
      .subscribe(data=>{
           this.dataCasosPais2=data;
       });
       */

    }, 1500 );
  

  }

}

// Instalado paquetes
//npm install @swimlane/ngx-charts --save
//npm install @angular/cdk --save


//https://stackblitz.com/edit/swimlane-pie-chart?embed=1&file=app/app.component.ts