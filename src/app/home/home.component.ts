import { Component, OnInit, OnDestroy } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import { CasosService } from '../services/casos.service';
import { DatePipe } from "@angular/common";
import { map } from 'rxjs/operators';
import { ResultadoGeneral } from '../clases/ResultadoGeneral';
import { PaisConfirmados } from '../clases/PaisConfirmados';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
 
  map: Map;
  mapOptions: MapOptions;
  listaPaisConfirmados: PaisConfirmados[] = [];
  latitud= 8.538;
  longitud= -80.7821;
  resultadoGeneral:any;
  paises: any[any] = [];
  hoy = new Date();
  fechaActaulizada = "";
  fechaActaulizadaFormato= "";

  marker = new Marker([this.latitud,this.longitud])
  .setIcon(
    icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png'
    }));


    result2: any[]=[
      {
        "name": " ",
        "value": 0
      },
      {
        "name": " ",
        "value": 0
      },
      {
        "name": " ",
        "value": 0
      },
      {
        "name": " ",
        "value": 0
      },
      {
        "name": " ",
        "value": 0
      }
    ];

    result: any[]=[
      {
        "name": " ",
        "value": 0
      },
      {
        "name": " ",
        "value": 0
      },
      {
        "name": " ",
        "value": 0
      },
      {
        "name": " ",
        "value": 0
      },
      {
        "name": " ",
        "value": 0
      }
    ];

    view: any[] = [700, 400];

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


    // options
   // view: any[] = [700, 400];
   // gradient: boolean = true;
    showLegend2: boolean = false;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    legendPosition: string = 'below';


    intervalo;

  constructor(private datoseService : CasosService,private datePipe: DatePipe) { 
    console.log('Constructor');
    
    this.resultadoGeneral = JSON.parse(localStorage.getItem('dataResultadoGeneral')); 

    this.paises = JSON.parse(localStorage.getItem('dataCovidPaises')); 

    // Lista Ordenada de Paises Confirmados
    this.listaPaisConfirmados = this.datoseService.getListaPaisesConfirmados();

   
    this.intervalo = setInterval(()=>{
    // console.log(this.getRandomInt(0,200));
    const newResults = [...this.result];
      for(let i in this.result ){
        const numRandom = this.getRandomInt(0,this.listaPaisConfirmados.length);
        newResults[i].value = this.listaPaisConfirmados[numRandom].casos;
        newResults[i].name = this.listaPaisConfirmados[numRandom].name;
      }
      this.result = [...newResults];
    },3000);


    const newResults2 = [...this.result2];
    for(let i in this.result2 ){
      newResults2[i].value = this.listaPaisConfirmados[i].casos;
      newResults2[i].name = this.listaPaisConfirmados[i].name;
    }
    this.result2 = [...newResults2];


  /*
  this.hoy.setDate(this.hoy.getDate() - 1);
  this.fechaActaulizada = this.datePipe.transform(this.hoy,"M/d/yy");
  this.fechaActaulizadaFormato = this.datePipe.transform(this.hoy,"d/M/yy");
  */
 
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.initializeMapOptions();
 }

//Metdos Barras
 onSelect(event) {
      console.log(event);
  }

  //MetodoPastel
  
  onSelect2(data): void {
   // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
  
  onActivate(data): void {
   // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }
  
  onDeactivate(data): void {
   // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  actualizarUbicacion(latitud, longitud) {
    console.log(latitud+" "+longitud);
    this.latitud=latitud;
    this.longitud=longitud;      
    this.map.panTo(latLng(this.latitud,this.longitud));
    this.marker.setLatLng([this.latitud,this.longitud]);
    this.marker.addTo(this.map);

  }


  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(this.latitud,this.longitud),
      zoom: 4,
      dragging:true,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 5,
            minZoom:2,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    
    };
  }
  private addSampleMarker() {
       /* marker.bindTooltip(
           "Casos="+this.numero+" <br> Muertos="+this.numero+" <br> Recuperados="+this.numero+"",
           { permanent: true, offset: [-15, 30] }); */
      // this.marker.addTo(this.map);
  }


  // Retorna un entero aleatorio entre min (incluido) y max (excluido)
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
