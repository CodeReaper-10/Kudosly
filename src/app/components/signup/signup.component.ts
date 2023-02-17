import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string='';
  lastName: string='';
  email: string='';
  password: string='';
  confirmPassword: string='';

  onSubmit() {
    //Implement form submission logic here
  }
}