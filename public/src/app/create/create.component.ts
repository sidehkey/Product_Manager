import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct = {title: "", price: 0.00, image: ""};
  error = "";

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addProduct(){
    console.log("~Add Product~");
    var obs = this._httpService.createProduct(this.newProduct);
    obs.subscribe((data:any)=>{
      console.log("~Component:create~", data);
      if(!data.error){
        console.log("Successfully added!");
        this._router.navigate(["/products"]);
      }
    })
  }

}
