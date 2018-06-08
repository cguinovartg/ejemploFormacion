import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template : `
    <div class="app">
    {{ title + '!'}}
      <div>
        <h1>{{ numberOne + numberTwo }} </h1>
        <h1 [innerHTML]="title"></h1>
      </div>
      <div>
        <h1>{{ title }} </h1>
        <h1 [innerHTML]="title"></h1>

      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
      <div>
        <img [src]="logo" />
      </div>
    </div>
    `
})
export class AppComponent {
  title: string;
  numberOne: number = 1; 
  numberTwo: number = 2;
  isHappy: boolean = true;
  logo: string = 'assets/img/logo.svg';
  constructor(){
    this.title = 'Angular Basics';
  }
}