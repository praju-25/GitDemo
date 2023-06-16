import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

productObj:product=new product();
getProduct(){
  let pobj:any = {
    category : "Beauty Products",
    Pname: "Lipstick",
    price: 100,
    quantity:2,
    total :200
  }
  this.productObj = pobj
}

totalprice(){

let total = this.productObj.price * this.productObj.quantity
this.productObj.total = total
}

savedata(){
console.log("Product Details",this.productObj);
}
}
export class product{

  category!:string;
  Pname!:string;
  price!:number;
  quantity!:number;
  total!:number;

}