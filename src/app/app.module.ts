import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Leaflet Mapa
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';

// Componentes
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

//Grafica
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Utilizar el ngMODEL
import {FormsModule} from '@angular/forms';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {DatePipe} from "@angular/common";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoaderComponent
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
