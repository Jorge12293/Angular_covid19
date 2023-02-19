import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Leaflet Mapa
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';

// Componentes
import { NavbarComponent } from './@theme/navbar/navbar.component';
import { FooterComponent } from './@theme/footer/footer.component';

//Grafica
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Utilizar el ngMODEL
import {FormsModule} from '@angular/forms';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {DatePipe} from "@angular/common";
import { LoaderComponent } from './@theme/loader/loader.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { SliderListCountryComponent } from './presentation/components/slider-list-country/slider-list-country.component';
import { CompareAcrossCountriesComponent } from './presentation/components/compare-across-countries/compare-across-countries.component';
import { CountryMoreCasesComponent } from './presentation/components/country-more-cases/country-more-cases.component';
import { DataGeneralComponent } from './presentation/components/data-general/data-general.component';
import { DateUpdateComponent } from './presentation/components/date-update/date-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoaderComponent,
    SliderListCountryComponent,
    CompareAcrossCountriesComponent,
    CountryMoreCasesComponent,
    DataGeneralComponent,
    DateUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
