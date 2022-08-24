import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../../models/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  getEdit(id:number){
    this.productService.getEdit(id);
    this.router.navigateByUrl('/edit/'+id)
  }

  del(id:number){
    this.productService.del(id);
  }


}
