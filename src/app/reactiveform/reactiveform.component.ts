import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit{
  signup!: FormGroup; 

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.signup = new FormGroup({
      "firstName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{2,10}'),Validators.minLength(2)]),
      "lastName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{2,10}'),Validators.minLength(2)]),
      "age" : new FormControl('',[Validators.required]),
      "email" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
      "gender" : new FormControl('',[]),
      "address" : new FormGroup({
        "line1" : new FormControl('',[]),
        "city" : new FormControl('',[]),
        "state" : new FormControl('',[]),
        "country":new FormControl('',[])
      })

    })
  }

  get firstName(){
    return this.signup.controls['firstName']
  }

  get lastname(){
    return this.signup.controls['lastName']
  }

  get age(){
    return this.signup.controls['age']
  }

  get email(){
    return this.signup.controls['email']
  }

  save(){
    console.log('values',this.signup.value);
  }





}



