import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EployeeInfoComponent } from './eployee-info.component';

describe('EployeeInfoComponent', () => {
  let component: EployeeInfoComponent;
  let fixture: ComponentFixture<EployeeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EployeeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
