import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
orders: any[] = [
    { id: 1, customer: 'Customer 1', status: 'Pending' },
    { id: 2, customer: 'Customer 2', status: 'Shipped' },
    // Add more orders
];
}

