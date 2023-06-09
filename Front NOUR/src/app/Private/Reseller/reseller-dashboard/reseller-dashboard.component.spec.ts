import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerDashboardComponent } from './reseller-dashboard.component';

describe('ResellerDashboardComponent', () => {
  let component: ResellerDashboardComponent;
  let fixture: ComponentFixture<ResellerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
