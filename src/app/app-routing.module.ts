import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { OrdersComponent } from './admin/components/orders/orders.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { ProductAddComponent } from './admin/components/product-add/product-add.component';
import { ProductListComponent } from './admin/components/product-list/product-list.component';
import { EditProductComponent } from './admin/components/edit-product/edit-product.component';
import { AuthGuard } from './guard/guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/orders', component: OrdersComponent },
  { path: 'admin', component:AdminDashboardComponent },
  { path: 'admin/addproduct', component:ProductAddComponent },
  { path: 'admin/listproduct', component:ProductListComponent },

  {path: 'products', component:AllProductsComponent},
  {path: 'details/:id', component:ProductsDetailsComponent},
  {path: 'edit/:id', component:EditProductComponent},
  {path: 'cart', component:CartComponent},
  // {path: '**', redirectTo:"products",pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  {
    path: 'user-dashboard',
    component: AllProductsComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'user' } // Specify the expected role
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'admin' }, // Specify the expected role
    children: [
      { path: 'addproduct', component: ProductAddComponent },
      { path: 'listproduct', component: ProductListComponent }]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
