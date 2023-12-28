import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path:'register',
    loadComponent: ()=> import('./signup/signup.component').then((item=>item.SignupComponent))
  },
    {
    path:'login',
    loadComponent: ()=> import('./signin/signin.component').then((item=>item.SigninComponent)),
  },
  {
    path:'',
    loadComponent: ()=> import('./signin/signin.component').then((item=>item.SigninComponent)),
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
