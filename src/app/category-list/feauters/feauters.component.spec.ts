import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeautersComponent } from './feauters.component';

describe('FeautersComponent', () => {
  let component: FeautersComponent;
  let fixture: ComponentFixture<FeautersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeautersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeautersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
