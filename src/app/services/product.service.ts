import { Injectable } from '@angular/core';
import {Product} from "../../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  productEdit:Product=new Product(0,"","",0,1);
  constructor() {
    this.products.push(new Product(1, "oto", "https://st.quantrimang.com/photos/image/2019/10/31/hinh-nen-o-to-dep-5.jpg", 500, 1))
    this.products.push(new Product(2, "oto", "https://storage.googleapis.com/f1-cms/2020/08/b93bd613-20200826_092520.jpg", 500, 0))
    this.products.push(new Product(3, "oto", "https://menback.com/wp-content/uploads/2022/01/xe-o-to-dat-nhat-the-gioi-menback.jpg", 500, 1))

  }

  create(product:any){
    this.products.push(product)
  }


  findByID(id:number):number{
    let size=this.products.length;
    for (let i = 0; i < size; i++) {
      if (id==this.products[i].id){
        return i;
      }
    }
    return -1;
  }
  getEdit(id:number){
    this.productEdit=this.products[this.findByID(id)];
  }
  del(id:number){

    this.products.splice(this.findByID(id),1)
  }


}
