import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    console.log("All My Products!");
    return this._http.get('/products');
  }

  getOneProduct(id:string){
    console.log("This is my product", id);
    return this._http.get('/products/' +id);
  }

  createProduct(productObj){
    console.log("Createa a new product", productObj);
    return this._http.post('/products/new', productObj);
  }

  editProduct(id:string, editProduct:object){
    console.log("Edited a product", editProduct);
    return this._http.put("/products/edit/"+id, editProduct);
  }

  deleteProduct(id:string){
    console.log("about to delete!", id);
    return this._http.delete("/products/delete/"+id);
  }
}
