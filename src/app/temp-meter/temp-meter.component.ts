import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tempDesc = "";

  parseToInt(temp:string){
    return parseInt(temp);
  }

  status(temp:number){
    if(temp < 20){
      this.tempDesc = "Cold";
    }else if(temp >= 30){
      this.tempDesc = "Hot";
    }else{
      this.tempDesc = "Regular";
    }
  }
}
