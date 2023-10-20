import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  products:Product[]=[];
  categories:string[]=[];
  loading:boolean = false;
  cartProducts:any[]=[]
  constructor(private service:ProductsService){}
  
  ngOnInit(): void {
    // This method will be called when the component is initialized.
    this.getProducts();
    this.getCategories();
    
  }
  getProducts(){
    this.loading=true
    this.service.getAllProducts().subscribe({next:(res:any)=>{
      this.loading=false
      this.products = res;
    },error:error => alert(error.message)})
  }
  getCategories(){
    this.loading=true

    this.service.getAllCategories().subscribe({next:(res:any)=>{
      this.loading=false
      this.categories = res;
    },error:error => alert(error.message)}
    )
  }
  filterCategories(event:any){
    
    let value = event.target.value;
     (value=='All')? this.getProducts(): this.getProductsCategory(value)
    
  }
  getProductsCategory(keyword:string){
    this.loading=true

    this.service.getProductsByCategory(keyword).subscribe((res:any)=>{
      this.loading=false

      this.products = res
    })
  }
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item=>item.item.id==event.item.id)
      if(exist){
        alert("product is already exist")
      }else{
        this.cartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }

    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }
  }
}
