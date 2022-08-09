import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeInfoComponent } from './mange-info.component';

describe('MangeInfoComponent', () => {
  let component: MangeInfoComponent;
  let fixture: ComponentFixture<MangeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
