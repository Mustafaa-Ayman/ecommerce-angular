import { ProductService } from './../../product.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/products/models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  products:Product[]=[]
  newProduct: any = {
    title: '',
    price: 0,
    description: '',
    image: '',
    category: ''
  };
  loading:boolean=false
  
  constructor(private service:ProductService){}
  getProducts(){
    this.loading=true
    this.service.getAllProducts().subscribe({next:(res:any)=>{
      this.loading=false
      this.products = res;
    },error:error => alert(error.message)})
  }
  addProduct() {
    this.service.addProduct(this.newProduct).subscribe((response) => {
      console.log('Product added:', response);
    });
  }

}
