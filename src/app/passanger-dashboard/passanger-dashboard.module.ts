import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { PassangerDashboardComponent } from './containers/passanger-dashboard/passanger-dashboard.component';
import { PassangerViewerComponent } from './containers/passanger-viewer/passanger-viewer.component';

// components
import { PassangerActionsComponent } from './components/passanger-actions/passanger-actions.component';
import { PassangerCountComponent } from './components/passanger-count/passanger-count.component';
import { PassangerDetailComponent } from './components/passanger-detail/passanger-detail.component';
import { PassangerInfoComponent } from './components/passanger-info/passangers-info.component';
import { PassangerFormComponent } from './components/passanger-form/passanger-form.component';


// services
import { PassangerDashboardService } from './passanger-dashboard.service';


const routes: Routes = [
    {
        path: 'passengers',
        children:[
            {path: '', component: PassangerDashboardComponent},
            {path: ':id', component: PassangerViewerComponent},

        ]
    }
];



@NgModule ({

declarations: [
    //containers
    PassangerDashboardComponent,
    PassangerViewerComponent,


    //components
    PassangerActionsComponent,
    PassangerCountComponent,
    PassangerDetailComponent,
    PassangerInfoComponent,
    PassangerFormComponent
],


imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
],

exports: [
    PassangerDashboardComponent,
    PassangerViewerComponent
],

providers: [
    PassangerDashboardService
]

})

export class PassangerDashboardModule { }