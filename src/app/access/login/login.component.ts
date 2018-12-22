import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { AuthService } from '../auth.service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  response: string;

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({

      'username': new FormControl('peter@klaven', [
        Validators.required
      ]),
      'password': new FormControl('cityslicka', Validators.required)

    });
  }

  onSubmit(event) {

    event.preventDefault();

    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.Auth.getLoginDetails(username, password).subscribe((response: Response) => {
      const data = response.json();

      if (!data.error) {

        this.Auth.setLoggedIn(true);
        this.router.navigate(['/userlist']);

        // add response data to storage
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('accountId', data.accountId);
        localStorage.setItem('account', JSON.stringify(data.account));
      } else {
        this.response = data.error_description;
      }

    });


  }
}
