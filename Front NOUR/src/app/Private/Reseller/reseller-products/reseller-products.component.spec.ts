import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerProductsComponent } from './reseller-products.component';

describe('ResellerProductsComponent', () => {
  let component: ResellerProductsComponent;
  let fixture: ComponentFixture<ResellerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
