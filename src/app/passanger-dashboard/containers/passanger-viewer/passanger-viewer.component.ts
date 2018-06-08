import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import{ PassangerDashboardService } from '../../passanger-dashboard.service';

import { Passenger } from '../../models/passanger.interface';

@Component({
    selector: 'passanger-viewer',
    styleUrls: ['passanger-viewer.component.scss'],
    template: `
    <div>
        <button (click)="goBack()">
        &lsaquo; Go Back
        </button>
        <passanger-form 
            [detail]="passanger" 
            (update)="onUpdatePassanger($event)">
        </passanger-form>
    </div>
    `
})

export class PassangerViewerComponent implements OnInit {
    passanger: Passenger;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passangerService: PassangerDashboardService
    ) {}





    ngOnInit() {
        this.route.params
            .switchMap((data: Passenger) => this.passangerService.getPassanger(data.id))
            .subscribe((data: Passenger) => this.passanger = data);
    }


    goBack(){
        this.router.navigate(['/passengers']);
     }


onUpdatePassanger(passanger: Passenger){
    this.passangerService
        .updatePassanger(passanger)
        .subscribe((data: Passenger) =>{
            this.passanger = Object.assign(
                {},
                this.passanger,
                passanger
            );
        });
    }
}