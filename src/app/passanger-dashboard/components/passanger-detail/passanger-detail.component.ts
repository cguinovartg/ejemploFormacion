import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passanger.interface';


@Component({
    selector: 'passanger-detail',
    styleUrls: ['passanger-detail.component.scss'],
    templateUrl: 'passanger-detail.component.html'
})

export class PassangerDetailComponent{
   
    defaultFlag: string ='european-union.svg';
    editing: boolean = false;
    
    @Input()
    display: boolean;

    @Output()
    select: EventEmitter<Passenger> = new EventEmitter();

    @Input()
    detail: Passenger;

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter();

    constructor() {}

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if (this.editing) {
         this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }

    onCheckIn(){
        this.detail.checkedIn = true;
        this.detail.checkInDate = Date.now();
        this.edit.emit(this.detail);

    }
    onSelect() {
        this.select.emit(this.detail);
    }
}