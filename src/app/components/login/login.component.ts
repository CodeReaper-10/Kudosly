import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
      // Handle login logic here
      console.log('Form submitted successfully.');
    }
  }

}
