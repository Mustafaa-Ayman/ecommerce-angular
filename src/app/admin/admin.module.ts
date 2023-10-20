import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderUpdateStatusComponent } from './components/order-update-status/order-update-status.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
import { EditProductComponent } from './components/edit-product/edit-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    OrdersComponent,
    ProductListComponent,
    ProductAddComponent,
    OrderListComponent,
    OrderUpdateStatusComponent,
    AdminDashboardComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProductsModule
  ]
})
export class AdminModule { }
