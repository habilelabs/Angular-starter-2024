import { Component, OnInit } from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule],
  providers:[
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}
    }
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.less',
})
export class SigninComponent{

  constructor(private router: Router){}

  goTo = (url:string) => {
    console.log(url,"url");
    this.router.navigate([url])
  }

}
