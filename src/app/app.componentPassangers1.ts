import { Component } from '@angular/core';


interface Child {
  name: string,
  age: number
}


interface Passanger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate?: number,
  children: Child[] | null,
  nationality: string
}


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passangers</h3>
      <div class="actions">
        <button class="all-passangers" (click)="filterPassangers(null)">All</button>
        <button class="checked-in-passangers" (click)="filterPassangers(true)">Checked In</button>
        <button class="not-checked-in-passangers" (click)="filterPassangers(false)">Not Checked In</button>
      </div>
        <ul>
          <li *ngFor ="let passanger of passangers;let i = index;">
            <div *ngIf = "(passanger.checkIn == display) || display==null" class="card">
              <img src="./assets/img/flags/{{ (passanger.nationality ? passanger.nationality : defaultFlag) }}" width="17"/>
              <span
                class="status"
                [class.checked-in]="passanger.checkedIn">
              </span>
            {{ i+1 }}: {{ passanger.fullname }}
            <div class ="date">
              Check in date: 
               {{ 
                 (passanger.checkedInDate 
                  ? (passanger.checkedInDate | date : 'MMM d, y')
                  : 'Not checked in') | uppercase 
               }}
          </div>
            <div class ="children">
               Children: {{ passanger.children?.length || 0}}
            </div>
           </div>
          </li>
        </ul>
    </div>
        
    `
})
export class AppComponent {
  display: boolean;
  defaultFlag: string ='european-union.svg';
  passangers: any = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkedInDate: 1510742000000,
    children: [{ name: 'Ted', age: 3 }],
    nationality: null

  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    children: null,
    nationality: 'france.svg'

  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkedInDate: 1510742000000,
    children: [{ name: 'Chloe', age: 7 }, { name: 'Emma', age: 5 }],
    nationality: 'united-states-of-america.svg'


  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkedInDate: 1510742000000,
    children: null,
    nationality: null



  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    children: null,
    nationality: 'united-kingdom.svg'


  }];
}

