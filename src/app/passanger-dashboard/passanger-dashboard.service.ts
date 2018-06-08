
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Passenger } from './models/passanger.interface';

import { environment } from '../../environments/environment';

const PASSANGER_API : string = `${environment.backend}/passangers`;


@Injectable()
export class PassangerDashboardService {
  constructor (private http: Http) { }

  getPassangers(): Observable<Passenger[]> {
      return this.http
      .get(PASSANGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json));
  }

  getPassanger(id: number): Observable<Passenger> {
    return this.http
    .get(`${PASSANGER_API}/${id}`)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json));
}

updatePassanger(passanger: Passenger): Observable<Passenger>{ 
    return this.http
    .put(`${PASSANGER_API}/${passanger.id}`, passanger)
    .map((response: Response) => response.json())
    .catch((error: any)=> Observable.throw(error.json));
    }



  removePassanger(passanger: Passenger): Observable<Passenger> {
    return this.http
    .delete(`${PASSANGER_API}/${passanger.id}`)
    .map((response: Response) => response.json())
    .catch((error: any)=> Observable.throw(error.json));
  }

  addPassanger(passanger: Passenger): Observable<Passenger>{
    return this.http
     .post(`${PASSANGER_API}/`, passanger)
     .map((response: Response) => response.json())
     .catch((error: any) => Observable.throw(error.json));
  }



}

