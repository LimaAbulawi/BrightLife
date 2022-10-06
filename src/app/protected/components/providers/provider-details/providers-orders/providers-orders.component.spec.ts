import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersOrdersComponent } from './providers-orders.component';

describe('ProvidersOrdersComponent', () => {
  let component: ProvidersOrdersComponent;
  let fixture: ComponentFixture<ProvidersOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
