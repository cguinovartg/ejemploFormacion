import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passanger.interface';
import { Baggage } from '../../models/baggage.interface';


@Component({
    selector: 'passanger-form',
    styleUrls: ['passanger-form.component.scss'],
    template : `
        <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
            <div>
            Passanger ID:
            <input type="text" name="id" #id="ngModel" required [ngModel]="detail?.id"/>
            <small *ngIf="id.errors?.required && id.dirty">
                ID is required
            </small>
            </div>
             <div>
            Passanger name:
            <input type="text" name="fullname" #fullname="ngModel" required [ngModel]="detail?.fullname"/>
            <small *ngIf="fullname.errors?.required && fullname.touched">
                Passanger name is required
            </small>
            </div>
            <div>
                <label>
                    <input type="checkbox"  
                    name="checkedIn"
                    [ngModel]="detail?.checkedIn"
                    (ngModelChange)="toogleCheckIn($event)"/>
                    
                </label>
                <div *ngIf="form.value.checkedIn">
                    Check In Date:
                    <input
                        type="number"
                        name="checkInDate"
                        [ngModel]="detail?.checkInDate"/>
                </div>
                <div>
                    Luggage:
                    <select
                        name="baggage"
                        [ngModel]="details?.baggage">
                        <option 
                        *ngFor="let item of baggage"
                        [value]="item.key"
                        [selected]="item.key === detail?.bagagge">>
                            {{ item.value }}
                        </option>
                    </select>
                </div>
                <div>
                    Nationality:
                    <select
                        name="nationality"
                        [ngModel]="details?.nationality">
                        <option 
                        *ngFor="let item of nationality"
                        [value]="item.key"
                        [selected]="item.key === detail?.bagagge">>
                            {{ item.value }}
                        </option>
                    </select>
                </div>
            </div>
            
            <button type="submit" [disabled]="form.invalid">
                Update Passanger
            </button>
        </form>
    `

})

export class PassangerFormComponent{
    @Input()
    detail: Passenger;
    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    }, {
        key:'hand-only',
        value: 'Hang baggage'

    },{
        key: 'hold-only',
        value: 'Hold baggage'

    },{
        key: 'had-hold',
        value: 'Hand and hold baggage'
    }];




    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();



    handleSubmit(passanger: Passenger, isValid: boolean){
        if(isValid){
            this.update.emit(passanger);
        }
    }



    toggleCheckIn(checkedIn: boolean){
        if (checkedIn){
            this.detail.checkInDate = Date.now();
        }
    }
}