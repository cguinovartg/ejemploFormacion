import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template : `
    <div class="app">
    <input 
      type="text" 
      [value]="name"
      (input)="handleChange($event.target.value)"
      />
      <div *ngIf ="name.length > 3">
      Searching for ... {{ name }}
      </div>
        
    `
})
export class AppComponent {
  handleClick(value: string) {
    console.log(value);
    this.name = value;
  }

  handleChange(value: string) {
    this.name = value;
  }
  
  title: string;
  name: string = 'Carlos'; 

  constructor(){
    this.title = 'Angular Basics';
  }
}
