import { Component, OnInit, OnDestroy, ViewChild, ViewChildren, Input } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import { DatePipe } from "@angular/common";
import { ApiCovidService } from '../../../data/services/api-covid.service';
import { CovidCountry } from 'src/app/domain/models/covid-country';
import { CountryMoreCasesComponent } from '../../components/country-more-cases/country-more-cases.component';
import { DataGeneralComponent } from '../../components/data-general/data-general.component';
import { DateUpdateComponent } from '../../components/date-update/date-update.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() listCovidCountry:CovidCountry[]=[];

  @ViewChild(CountryMoreCasesComponent) countryMoreCasesComponent:CountryMoreCasesComponent;
  @ViewChild(DataGeneralComponent) dataGeneralComponent:DataGeneralComponent;
  @ViewChild(DateUpdateComponent) dateUpdateComponent:DateUpdateComponent;
  
  
  map: Map;
  mapOptions: MapOptions;
  lat= 8.538;
  lng= -80.7821;
  view: any[] = [700, 400];
  marker = new Marker([this.lat,this.lng]).setIcon(
    icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png'
    })
  );
  
  constructor(
    private datePipe: DatePipe,
  ) {}


  ngOnInit(): void {
    this.initializeMapOptions();
    setTimeout( () => { 
      this.loadDataGraphic(this.listCovidCountry);
    }, 1000 );
 }

 loadDataGraphic(listCovidCountry:CovidCountry[]){
  this.countryMoreCasesComponent.loadDataCountry(listCovidCountry);
  this.dataGeneralComponent.loadDataTotalCountry(listCovidCountry);
  let dateUpdate = this.datePipe.transform(listCovidCountry[0].lastupdate,"dd - MMM - yyy");
  this.dateUpdateComponent.updateDate(dateUpdate);
 }

 updatePointMapEvent(eventCovidCountry:CovidCountry){
    this.map.panTo(latLng(eventCovidCountry.location.lat,eventCovidCountry.location.lng));
    this.marker.setLatLng([eventCovidCountry.location.lat,eventCovidCountry.location.lng]);
    this.marker.bindTooltip(this.labelPoint(eventCovidCountry));
    this.marker.addTo(this.map);
 }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(this.lat,this.lng),
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
  
  onMapReady(map: Map) {
    this.map = map;
  }

  labelPoint(eventCovidCountry : CovidCountry){
    return `<strong style='color:black;'>${eventCovidCountry.countryRegion.toUpperCase()}</strong> <br>
            <strong style='color:blue;'> Casos= ${eventCovidCountry.confirmed}</strong> <br>
            <strong style='color:red;'> Muertos= ${eventCovidCountry.deaths}</strong> <br>
            <strong style='color:green;'> Recuperados= ${eventCovidCountry.recovered}</strong>` 
  }
   
}
