import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'about',
    loadComponent:() => import('./about/about.component').then(item=>item.AboutComponent)
  },
  {
    path:'',
    loadComponent:() => import('./about/about.component').then(item=>item.AboutComponent),
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
