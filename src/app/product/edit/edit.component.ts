import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(public ps :ProductService,private r:Router) {
  }

  createForm = new FormGroup({
    id: new FormControl(this.ps.productEdit.id, Validators.required),
    name: new FormControl(this.ps.productEdit.name, Validators.minLength(3)),
    img: new FormControl(this.ps.productEdit.img, Validators.minLength(4)),
    price: new FormControl(this.ps.productEdit.price, Validators.min(4)),
    status: new FormControl(this.ps.productEdit.status),
  })
  ngOnInit(): void {
  }
  edit(){
    let v=this.createForm
    if (v.valid){
      let p =this.ps.productEdit;
      p.name=v.value.name+"";
      p.img=v.value.img+"";
      p.price=Number(v.value.price);
      p.status=Number(v.value.status)
      this.r.navigate(["/"])
    }
  }
}
