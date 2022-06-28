import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomerInfoComponent } from './coustomer-info.component';

describe('CoustomerInfoComponent', () => {
  let component: CoustomerInfoComponent;
  let fixture: ComponentFixture<CoustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoustomerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
