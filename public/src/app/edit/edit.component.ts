import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: object;
  editProduct: any;
  error: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.findProduct();
    this.editProduct = {title: "", price: 0.00, image: ""};
  }

  findProduct(){
    console.log("~Component: findProduct() initialized~")
    this._route.params.subscribe((params) =>{
      console.log("~ID:", params["id"])
      let obs = this._httpService.getOneProduct(params["id"]);
      obs.subscribe((data:any)=>{
        this.editProduct = data;
        console.log("~Component: editProduct response~", this.editProduct)
      })
    })
  }

  editSubmit(){
    console.log("~Component: editSubmit() initialized~")
    this._route.params.subscribe((params)=>{
      let obs = this._httpService.editProduct(params['id'], this.editProduct);
      obs.subscribe((data:any)=>{
        console.log("~component: editSubmit() response~:", data)
        if(!data.error){
          this._router.navigate(["/products"]);
        }
        else{
          console.log("~Component: editSubmit() Error~", data.error)
        }
      })
    })
  }

}
