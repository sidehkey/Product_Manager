import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.listPage()
  }

  listPage() {
    console.log("hello products");
    let obs = this._httpService.getAllProducts();
    obs.subscribe((data: any) => {
      console.log("list Page", data)
      this.products = data['data'];
    })
  }

  // deleteProduct(id: string) {
  //   console.log("delete component");
  //   let observable = this._httpService.deleteProduct(id);
  //   observable.subscribe(data => {
  //     console.log("deleted", data)
  //     this.listPage();
  //   })
  // }



}
