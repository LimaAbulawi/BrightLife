import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoonsComponent } from './zoons.component';

describe('ZoonsComponent', () => {
  let component: ZoonsComponent;
  let fixture: ComponentFixture<ZoonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
