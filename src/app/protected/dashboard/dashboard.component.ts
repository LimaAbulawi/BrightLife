import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { HostListener } from "@angular/core";
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // isShown: Array<Boolean> = [];
  isdelete: any = [];
  scrHeight: any;
  scrWidth: any;
  isShown: boolean = false;
  userName!: any;
  userEmail!: any;
  image!: any;
  leftToggle: boolean = true;
  rightToggle: boolean = false;
  active: any = 1 ;
  // active1: any = 1;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 992) {
      this.isShown = true;
      this.leftToggle = false;
      this.rightToggle = true;
    }
    // this.isShown[0] = !this.isShown[0];
    // this.scrHeight = window.innerHeight;
    // console.log(this.scrHeight, this.scrWidth);
  }
  constructor(private router: Router, private _ser: AuthService) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem("userName");
    this.image = localStorage.getItem("userImage");
    this.userEmail = localStorage.getItem("userEmail");
    this.active = localStorage.getItem("active");
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/public/']);
    return  this._ser.logout().subscribe((res: any) => {
      console.log("res",res)
    })
  }
  setActive(event:any){
   localStorage.setItem("active", event);  
   this.active = localStorage.getItem("active");
  }
}
