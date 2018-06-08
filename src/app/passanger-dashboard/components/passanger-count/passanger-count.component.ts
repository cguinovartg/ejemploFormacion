import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passanger.interface';

@Component({
    selector: 'passanger-count',
    template: `
    <div>
        <h3> Airline Passengers </h3>
        <div>
            Total checked in: {{ checkedInCount() }}/{{ items?.length }}
        </div>
    </div>
    `
})

export class PassangerCountComponent{
    @Input()
    items: Passenger[];
    checkedInCount(): number{
        if (!this.items) return;
        return this.items.filter((passanger: Passenger) => passanger.checkedIn).length;
        }
    }
