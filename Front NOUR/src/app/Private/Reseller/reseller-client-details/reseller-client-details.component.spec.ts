import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerClientDetailsComponent } from './reseller-client-details.component';

describe('ResellerClientDetailsComponent', () => {
  let component: ResellerClientDetailsComponent;
  let fixture: ComponentFixture<ResellerClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerClientDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellerClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
