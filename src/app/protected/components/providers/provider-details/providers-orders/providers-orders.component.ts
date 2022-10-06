import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers-orders',
  templateUrl: './providers-orders.component.html',
  styleUrls: ['./providers-orders.component.scss']
})
export class ProvidersOrdersComponent implements OnInit {

  @Input() providerId = ''; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
