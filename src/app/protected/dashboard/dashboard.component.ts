import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { HostListener } from "@angular/core";

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
  image!: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 992) {
      this.isShown = true;
    }
    // this.isShown[0] = !this.isShown[0];
    // this.scrHeight = window.innerHeight;
    // console.log(this.scrHeight, this.scrWidth);
  }
  constructor(private router: Router) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem("userName");
    this.image = localStorage.getItem("userImage");
  }

  logOut() {
    // localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    // localStorage.removeItem("userName");
    // localStorage.removeItem("userImage");
    localStorage.clear();
    // window.location.reload();
    return this.router.navigate(['/public/']);
  }
}

