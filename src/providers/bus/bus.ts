import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the BusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BusProvider {
  url;
  stopId;
  routeTag;
  constructor(public http: HttpClient) {
    console.log('Hello BusProvider Provider');
    this.stopId = '2748';//home stop
    this.routeTag = '113';//bus route
    this.url = 'http://restbus.info/api/agencies/ttc/routes/';
  }

    getSchedule(stop, bus){
      this.url = this.url+bus+'/stops/'+stop+'/predictions';
      return this.http.get(this.url);
    }
}
