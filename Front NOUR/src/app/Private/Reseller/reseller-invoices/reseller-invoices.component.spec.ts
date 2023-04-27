import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerInvoicesComponent } from './reseller-invoices.component';

describe('ResellerInvoicesComponent', () => {
  let component: ResellerInvoicesComponent;
  let fixture: ComponentFixture<ResellerInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellerInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
