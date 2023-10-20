import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/products/models/Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() data!:Product
  @Output() item = new EventEmitter()
  amount:number = 0;
  constructor(private service:ProductService){}
  ngOnInit():void {}
 
  deleteProduct() {
    this.service.deleteProduct(this.data.id).subscribe((response) => {
      console.log('Product deleted:', response);
    }); 
  }

}
