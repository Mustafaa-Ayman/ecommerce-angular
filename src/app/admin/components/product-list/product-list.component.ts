import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products:Product[]=[];
  loading:boolean = false
  constructor(private service:ProductService){

  }
ngOnInit(){
  this.getProducts();
}
getProducts(){
  this.loading=true
  this.service.getAllProducts().subscribe({next:(res:any)=>{
    this.loading=false
    this.products = res;
  },error:error => alert(error.message)})
}
edit(event:any){console.log(event);}
  
}
