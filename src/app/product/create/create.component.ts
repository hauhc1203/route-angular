import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {Product} from "../../../models/Product";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  createForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    name: new FormControl("", Validators.minLength(3)),
    img: new FormControl("", Validators.minLength(4)),
    price: new FormControl(0, Validators.min(4)),
    status: new FormControl(1)
  })
  create() {
    if (this.createForm.valid) {
      let value=this.createForm.value
      this.productService.create(value);
      this.router.navigate(["/"]);
    }
  }
}
