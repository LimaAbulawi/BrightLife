import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatProviderComponent } from './add-cat-provider.component';

describe('AddCatProviderComponent', () => {
  let component: AddCatProviderComponent;
  let fixture: ComponentFixture<AddCatProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCatProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
