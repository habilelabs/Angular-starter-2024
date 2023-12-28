import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatSelectModule, NgFor],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.less',
})
export class SignupComponent implements OnInit {
  Roles: any = ['Admin', 'Employee'];

  ngOnInit(): void {
      
  }

}
