import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'login',
        loadChildren: () => import('./components/login/login.module').then((item)=>item.LoginModule),
    },
    {
        path:'home',
        loadComponent: () => import('./components/home/home.component').then((item)=>item.HomeComponent),
    },
    {
        path:'about',
        loadChildren: () => import('./components/protected/protected.module').then(item=>item.ProtectedModule),
        canActivate: [authGuard]
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    }
];
