export class Product{
  id:number;
  name:String;
  img:String;
  price:number;
  status:number;


  constructor(id: number, name: string, img: string, price: number, status: number) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.status = status;
  }


}
