import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title   = 'covid19';
  loading : boolean=true;

  constructor() { 
    setTimeout( () => { 
      this.loading=false;
    }, 1500 );
  }
}



