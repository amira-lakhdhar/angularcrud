import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerQuotesComponent } from './reseller-quotes.component';

describe('ResellerQuotesComponent', () => {
  let component: ResellerQuotesComponent;
  let fixture: ComponentFixture<ResellerQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellerQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
