import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template : `
    <div class="app">
      
        <button (click)="handleClick(username.value)">
         CHANGE Value
        </button>
        <input type="text" #username/>
        {{ name }}
    </div>
    `
})
export class AppComponent {
  handleClick(value: string) {
console.log(value);
this.name = value;
  }
  
  title: string;
  name: string = 'Carlos'; 

  logo: string = 'assets/img/logo.svg';
  
  
  
  
  constructor(){
    this.title = 'Angular Basics';
  }
}
