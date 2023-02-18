import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(signupForm: NgForm) {
    if (this.user.password !== this.user.confirmPassword) {
      signupForm.controls['confirmPassword'].setErrors({'passwordMismatch': true});
    }
    console.log(this.user);
    this.router.navigate(['/login']);
  }
}