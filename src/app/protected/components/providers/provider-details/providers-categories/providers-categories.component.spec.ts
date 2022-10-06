import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersCategoriesComponent } from './providers-categories.component';

describe('ProvidersCategoriesComponent', () => {
  let component: ProvidersCategoriesComponent;
  let fixture: ComponentFixture<ProvidersCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
