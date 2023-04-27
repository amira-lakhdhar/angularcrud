import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerSubscriptionsComponent } from './reseller-subscriptions.component';

describe('ResellerSubscriptionsComponent', () => {
  let component: ResellerSubscriptionsComponent;
  let fixture: ComponentFixture<ResellerSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerSubscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellerSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
