import { Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { TeamComponent } from './component/team/team.component';

export const routes: Routes = [
    {
        path:"",
        component:  HomeComponent,
    },
    {
        path:"app-register",
        component:  RegisterComponent,
    },
    {
        path:"app-login",
        component:  LoginComponent,
    },
    {
        path:"app-gallery",
        component: GalleryComponent,
    },
    {
        path:"team-Instructors",
        component: TeamComponent,
    }
];
