import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'passanger-actions',
    template: `
    <div class="actions">
        <button class="all-passangers" (click)="filterPassangers(null)">All</button>
        <button class="checked-in-passangers" (click)="filterPassangers(true)">Checked In</button>
        <button class="not-checked-in-passangers" (click)="filterPassangers(false)">Not Checked In</button>
        <button class="add-new-passanger" (click)="addPassanger(true)">Add Passenger</button>
    </div>
    `
})

export class PassangerActionsComponent {
    display: boolean;

    @Output()
    filter: EventEmitter<boolean> = new EventEmitter();

    @Output()
    add: EventEmitter<boolean> = new EventEmitter();

    filterPassangers(value: any) {
        this.display = value;
        this.filter.emit(this.display);
    }

    addPassanger() {
        this.add.emit();
    }

}