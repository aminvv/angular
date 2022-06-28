import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDeatailsComponent } from './products-deatails.component';

describe('ProductsDeatailsComponent', () => {
  let component: ProductsDeatailsComponent;
  let fixture: ComponentFixture<ProductsDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDeatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
