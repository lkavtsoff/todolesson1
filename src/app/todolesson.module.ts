import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todolesson.component';
import { TheaderComponent } from './theader/theader.component';
import { TfooterComponent } from './tfooter/tfooter.component';
import { TlistComponent } from './tlist/tlist.component';
import { PsingleComponent } from './psingle/psingle.component';
import { PaboutComponent } from './pabout/pabout.component';
import { PnfComponent } from './pnf/pnf.component';

const listRoutes: Routes =[
    { path: '', component: TlistComponent},
    { path: 'about', component: PaboutComponent},
    { path: 'product/:id', component: PsingleComponent},
    { path: '**', component: PnfComponent }
];

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(listRoutes)
    ],
    declarations: [
        TodoComponent, 
        TheaderComponent, 
        TfooterComponent, 
        TlistComponent, PsingleComponent, PaboutComponent, PnfComponent
    ],
    bootstrap: [TodoComponent],
    providers: []
})

export class TodoLesson {
    
}