import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brightLife';
  constructor(private router: Router) {}

  ngOnInit() {
    // when reload the url 
    // this.router.navigate(['protected'])
  }
}
