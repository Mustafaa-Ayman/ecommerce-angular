import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(environment.baseApi+'products')
  }
  addProduct(productData: any): Observable<any> {
    return this.http.post(environment.baseApi+'products', productData);
  }
  updateProduct(productId: number, productData: any): Observable<any> {
    const updateUrl = `${environment.baseApi}products/${productId}`;
    return this.http.put(updateUrl, productData);
  }
  deleteProduct(productId: number): Observable<any> {
    const deleteUrl = `${environment.baseApi+'products'}/${productId}`;
    return this.http.delete(deleteUrl);
  }

}
