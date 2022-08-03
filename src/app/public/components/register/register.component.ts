import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  register() {
    debugger
    if (!this.registerForm.valid) {
      return;
    }
    this.authService.register(this.registerForm.value).subscribe(
      (res: any) => {
        // console.log(res);
        if (res.code == 200) {
          this.router.navigate(['/protected/']);
        }
        else {
          // alert("0"+res.success)
        }
      },
    );
  }
}
