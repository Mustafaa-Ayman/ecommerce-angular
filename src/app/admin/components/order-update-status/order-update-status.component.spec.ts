import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUpdateStatusComponent } from './order-update-status.component';

describe('OrderUpdateStatusComponent', () => {
  let component: OrderUpdateStatusComponent;
  let fixture: ComponentFixture<OrderUpdateStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderUpdateStatusComponent]
    });
    fixture = TestBed.createComponent(OrderUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
