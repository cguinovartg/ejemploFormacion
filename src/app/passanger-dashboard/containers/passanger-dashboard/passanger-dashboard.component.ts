import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Passenger } from '../../models/passanger.interface';
import { PassangerDashboardService } from '../../passanger-dashboard.service'

@Component({
  selector: 'passanger-dashboard',
  styleUrls: ['passanger-dashboard.component.scss'],
  templateUrl: './passanger-dashboard.component.html'

})


export class PassangerDashboardComponent implements OnInit {
  display: boolean;
  defaultFlag: string = 'european-union.svg';
  passangers: Passenger[];
  selectedPassanger: Passenger;
  enableNewPassanger: boolean;

  constructor(
    private router: Router, private passangerService: PassangerDashboardService) { }

  ngOnInit() {
    this.passangerService
      .getPassangers()
      .subscribe(
        (data: Passenger[]) => this.passangers = data,
        (error: any) => console.log(error));
      
  }

  handleEdit(event) {
    this.passangerService
      .updatePassanger(event)
      .subscribe((data: Passenger) => {
        this.passangers = this.passangers.map((passanger: Passenger) => {
          if (passanger.id === event.id) {
            passanger = Object.assign({}, passanger, event);
          }
          return passanger;
        });
      });
  }


  handleRemove(event: Passenger) {
    this.passangerService
      .removePassanger(event)
      .subscribe((data: Passenger) => {
        this.passangers = this.passangers.filter((passanger: Passenger) => {
          return passanger.id !== event.id;
        });
      });
  }

  handleFilter(display: boolean) {
    this.display = display;
  }


  handleAddPassanger(){
    this.enableNewPassanger = true;
    this.selectedPassanger = null;
  }

  handleSelect(passanger: Passenger) {
    this.router.navigate(['/passengers', passanger.id]);
  
  }

  handleSave(event){
    const passanger: Passenger = {
      id: 0,
      fullname: event.name,
      checkedIn: event.checkedIn,
      children: null,
      nationality: this.defaultFlag
    };
    this.passangerService
    .addPassanger(passanger)
    .subscribe((data: Passenger)=>{
      if(data){
        this.selectedPassanger = data;
        this.enableNewPassanger = false;
        this.passangers = [... this.passangers, data];
      }
    });

  }

  handleClose(){
    this.enableNewPassanger = false;  
 }
}
