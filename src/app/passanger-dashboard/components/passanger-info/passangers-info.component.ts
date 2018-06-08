import { Component, Input, Output, EventEmitter } from '@angular/core'; 

import { Passenger } from '../../models/passanger.interface';

import {FormControl,FormGroup} from '@angular/forms';



@Component({
    selector: 'passanger-info',
    template: `
    <div *ngIf="passanger && !add" class="card">
        <div>ID: {{ passanger.id }} </div>
        <div> Name: {{ passanger.fullname }}</div>
        <div> Checked In: {{ passanger.checkedIn ? 'Yes' : 'No' }}</div>
        <div> Checked In Date : {{( passanger.checkInDate 
            ? (passanger.checkInDate | date: 'MMM d, y') 
            : 'Not checked in' 
            ) | uppercase }}
        </div>
        <div> 
            Nationality: 
            <img src="assets/img/flags/{{ (passanger.nationality ? passanger.nationality : defaultFlag) }}" width="17"/>
        </div>
        <div>
            Children:
            <ul>
                <li *ngFor="let child of passanger.children">
                    {{ child.name }} | {{ child.age }}
                </li>
            </ul>
        </div>    
    </div>
    <div *ngIf="add" class="card">
            <div>
             ID:
             <input type="text" placeholder="Automatic" disabled>
            </div>
            <div>
             Name:
             <input type="text" [(ngModel)]="name" placeholder="Passanger's name">
            </div>
            <div>
                Checked In:
                <div *ngFor="let option of options">
                    <input type="radio" name="checked-in" [(ngModel)]="checkedIn" [value]="option.value">
                        {{option.display}}
                </div>
            </div>
            <button (click)="handleSave()">Save</button>
            <button (click)="handleClose()">Close</button>
    </div>
            `
})

export class PassangerInfoComponent {
    defaultFlag: string ='european-union.svg';
    name: string;
    checkedIn: boolean;
    options = [
        { value: true, display: 'yes' },
        { value: false, display: 'no' }
    ];

    @Input()
    passanger: Passenger;

    @Input()
    add: boolean;
    
    @Output()
    save: EventEmitter<any> = new EventEmitter();

    @Output()
    close: EventEmitter<any> = new EventEmitter();

handleSave(){
    this.save.emit({
        'name': this.name,
        'checkedIn': this.checkedIn
    });
}

handleClose(){
    this.name='';
    this.checkedIn;
    this.close.emit();
    
 }

}

