import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isShown: Array<Boolean> = [];
  users: any = [];
  user: any = [];
  isdelete: any = [];

  constructor(private _ser: UsersService) { }

  ngOnInit(): void {
  }
}

