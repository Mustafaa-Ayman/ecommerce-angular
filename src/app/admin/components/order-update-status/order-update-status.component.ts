import { Component } from '@angular/core';

@Component({
  selector: 'app-order-update-status',
  templateUrl: './order-update-status.component.html',
  styleUrls: ['./order-update-status.component.scss']
})
export class OrderUpdateStatusComponent {
  orderId:number=3;
  newStatus:string='success';
  // Implement logic to update the order status in your backend
  updateStatus(orderId: number, newStatus: string) {
    console.log(`Updated status of order ${orderId} to ${newStatus}`);
  }

}
