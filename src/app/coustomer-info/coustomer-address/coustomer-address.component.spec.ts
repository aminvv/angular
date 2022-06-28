import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomerAddressComponent } from './coustomer-address.component';

describe('CoustomerAddressComponent', () => {
  let component: CoustomerAddressComponent;
  let fixture: ComponentFixture<CoustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoustomerAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
