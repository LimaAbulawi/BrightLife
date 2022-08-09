import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log( localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) )
    if (typeof localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) != 'undefined' && localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)) {
      console.log('alrady log');
      this.router.navigate(['/protected/']);
    }
  }


  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        // console.log(res.code);
        if (res.code == 200) {
          // localStorage.setItem("userName", "value");
          this.router.navigate(['/protected/']);
        }
      },
      (error) => {
        console.log(error)
        this.errorMessage = error.error.msg;
      }
    );
  }
}
