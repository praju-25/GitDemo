import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-product',
  templateUrl: './reactive-product.component.html',
  styleUrls: ['./reactive-product.component.css']
})
export class ReactiveProductComponent implements OnInit{
  product!: FormGroup; 

  clist:string[]=[];
  pList: string[]=[];

  constructor(private fb:FormBuilder){

  }
  category: any = {
    "Milk": ["Butter", "Panner", "Curd", "Ghee"],
    "Shampoo": ["Clinic-plus", "Vatika", "Sunslik"],
    "Candy": ["Snickers", "Kit-Kat", "Candy-Corn"]
  }
  ngOnInit(): void {
    this.clist = Object.keys(this.category)
    this.createForm();

    this.product.get('category')?.valueChanges.subscribe((category)=>{
      this.clist = this.category[category];  //this.productForm.get('productName')?.value
    });


//quantity * price //
    this.product.get('quantity')?.valueChanges.subscribe((quantity)=>{
      let quan = quantity;
      this.product.get('price')?.valueChanges.subscribe((price)=>{
      let total = quan * price || '';
      console.log(price)
      this.product.get('totalPrice')?.setValue(total)

      })
    })

    this.product.get('price')?.valueChanges.subscribe((price)=>{
      let prc = price;
      this.product.get('quantity')?.valueChanges.subscribe((quantity)=>{
      let total = prc * quantity || '';
      console.log(price)
      this.product.get('totalPrice')?.setValue(total)

      })
    })

  }
  createForm(){
    this.product = this.fb.group({
      category : ['',[Validators.required,]],
      productName : ['',[Validators.required,]],
      quantity : ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      price : ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      totalPrice : ['',[Validators.required,]]
    })
  }

get Category(){
  return this.product.get('category')
}
get productName(){
  return this.product.get('productName')
}
get quantity(){
  return this.product.get('quantity')
}
get price(){
  return this.product.get('price')
}
get totalPrice(){
  return this.product.get('totalPrice')
}

getdata(){
  let obj={
    category : "Milk",
    productName : "Butter",
    quantity : 3,
    price : 30,
    totalPrice :90
  }
  this.product.setValue(obj);

}

patchData(){
  let patchObj={
    category : "Candy",
    productName : "Kit-Kat",
    quantity : 2,
    price : 100,
    totalPrice : 200
  }

  this.product.patchValue(patchObj);
}
resetdata(){
  this.product.reset();
}

save()
{
  console.log("values",this.product.value);
}
}

   
  