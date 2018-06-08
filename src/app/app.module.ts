import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PassangerDashboardModule } from './passanger-dashboard/passanger-dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true}),
    PassangerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
