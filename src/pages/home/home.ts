import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { BusProvider } from '../../providers/bus/bus';
//import { Refresher }

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pred:any;
  vals:{
    minutes:number; 
    seconds:number;
  };
  bus:{
    route:string,
    stopId:string
  };
  weather:any;
  location:{
    city:string,
    province:string
  }

  constructor(public navCtrl: NavController, private weatherProv: WeatherProvider, private busProv: BusProvider) {

  }
  ionViewWillEnter(){
    this.bus = {
      route:'113',
      stopId: '3612'
    }
    this.location = {
      city:'Toronto',
      province:'ontario'
    }
    this.busProv.getSchedule(this.bus.stopId, this.bus.route).subscribe(bus => { 
      console.log(bus);
      this.pred = bus[0];
      console.log(this.pred);
      this.vals = bus[0].values;
      for(var i = 0; i<bus[0].values.length; i++){
          this.vals[i].minutes = Math.floor(bus[0].values[i].seconds / 60);
          this.vals[i].seconds = bus[0].values[i].seconds % 60;
      }
     
    });

    this.weatherProv.getWeather(this.location.province, this.location.city).subscribe(weather => {
      console.log(weather); 
      this.weather = weather;
      this.weather= this.weather.current_observation;
      console.log(this.weather); 
    });
  }
  refresh(){
    this.bus = {
      route:'113',
      stopId: '3612'
    }
    this.location = {
      city:'Toronto',
      province:'ontario'
    }
    this.busProv.getSchedule(this.bus.stopId, this.bus.route).subscribe(bus => { 
      console.log(bus);
      this.pred = bus[0];
      console.log(this.pred);
      this.vals = bus[0].values;
      for(var i = 0; i<bus[0].values.length; i++){
          this.vals[i].minutes = Math.floor(bus[0].values[i].seconds / 60);
          this.vals[i].seconds = bus[0].values[i].seconds % 60;
      }
     
    });

    this.weatherProv.getWeather(this.location.province, this.location.city).subscribe(weather => {
      console.log(weather); 
      this.weather = weather;
      this.weather= this.weather.current_observation;
      console.log(this.weather); 
    });
    complete();
  }

}
