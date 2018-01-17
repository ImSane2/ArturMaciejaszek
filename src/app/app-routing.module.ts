import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [
    {path: '', component: MainComponent, pathMatch: 'full'},
    {path: 'profile/:id', component: MainComponent},
    {path: '**', redirectTo: ''}
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
