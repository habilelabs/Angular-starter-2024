import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [],
  imports: [
    AboutComponent,
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
