import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component'


export const AuthRoutingModule: Routes = [
    { path: 'login',      component: LoginComponent },
];



