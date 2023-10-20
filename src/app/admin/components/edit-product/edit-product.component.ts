import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  updatedProduct: any = {
    title: '',
    price: 0,
    description: '',
    image: '',
    category: ''
  };

  id:any
  data:any={}
  loading:boolean=false
  constructor(private route:ActivatedRoute,private service:ProductService,private newService:ProductsService){
    this.id = this.route.snapshot.paramMap.get("id")
  }
  ngOnInit():void {this.getProduct()}
  updateProduct() {
    this.service.updateProduct(this.data.id, this.updatedProduct).subscribe((response) => {
      console.log('Product updated:', response);
    });
  }
  getProduct(){
    this.newService.getProductsById(this.id).subscribe(res=>{
      this.data = res
    })
  }
     
  deleteProduct() {
    this.service.deleteProduct(this.data.id).subscribe((response) => {
      console.log('Product deleted:', response);
    }); 
  }
}
