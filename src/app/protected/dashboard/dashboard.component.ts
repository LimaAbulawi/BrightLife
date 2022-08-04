import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { AuthService } from 'src/app/public/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isShown: Array<Boolean> = [];
  isdelete: any = [];

  constructor(private _ser: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  logOut() {
    
        localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY); 
        return this.router.navigate(['/public/']);
      
  }
}

