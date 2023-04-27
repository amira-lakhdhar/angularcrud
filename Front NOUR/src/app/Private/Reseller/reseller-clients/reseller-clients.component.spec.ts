import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerClientsComponent } from './reseller-clients.component';

describe('ResellerClientsComponent', () => {
  let component: ResellerClientsComponent;
  let fixture: ComponentFixture<ResellerClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellerClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellerClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
