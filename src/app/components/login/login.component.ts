import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
      // Handle login logic here
      console.log('Form submitted successfully.');
      this.router.navigate(['/home']);
    }
  }

}
