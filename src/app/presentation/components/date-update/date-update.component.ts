import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-update',
  templateUrl: './date-update.component.html',
  styleUrls: ['./date-update.component.scss']
})
export class DateUpdateComponent implements OnInit {
  
  dateData:string='';

  constructor() { }

  ngOnInit(): void {
  }
  
  updateDate(date:string){
    this.dateData=date;
  }
}
