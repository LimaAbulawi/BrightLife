import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zoons',
  templateUrl: './zoons.component.html',
  styleUrls: ['./zoons.component.scss']
})
export class ZoonsComponent implements OnInit {

  id: any;
  Id: any;
  constructor(private router: Router) {

    // get id from url 
    let URL = this.router.url;
    let URL_AS_LIST = URL.split('details/');
    this.Id = URL_AS_LIST[1];         // 8/zoons
    let Split2 = this.Id.split('/'); // array ['8', 'zoons']
    this.id = Split2[0];
  }

  ngOnInit(): void {
  }

}
