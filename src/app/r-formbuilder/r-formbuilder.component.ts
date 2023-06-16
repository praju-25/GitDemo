import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-r-formbuilder',
  templateUrl: './r-formbuilder.component.html',
  styleUrls: ['./r-formbuilder.component.css']
})
export class RFormbuilderComponent implements OnInit {
  signupform!: FormGroup; 
   constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.signupform =  this.fb.group({
      "firstName" :['',[Validators.required,Validators.pattern('[a-zA-Z]{2,10}'),Validators.minLength(2)]],
      "lastName" :['',[Validators.required,Validators.pattern('[a-zA-Z]{2,10}'),Validators.minLength(2)]],
      "age" : ['',[Validators.required]],
      "email" : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      "gender" : ['',[]],
      "address" : this.fb.group({
        "line1" : ['',[]],
        "city" :['',[]],
        "state" :['',[]],
        "country":['',[]]
      })
      })
    }
      save(){
        console.log(this.signupform.value);
      }
    
    
      getData(){
        let Obj = {
           "firstName":"shivansh",
           "lastName":"shinde",
           "gender":"male",
           "mobileNo":905885090,
           "email":"shiv@gmail.com",
           "address":{
            "line1":"Line 1 ",
            "line2": "Line 2 ",
            "city":"sangli",
            "state":"Maharashtra"
           }
        }
        this.signupform.setValue(Obj);
      
      }
    
    
      resetData(){
       this.signupform.reset();
      }
    
      setmobileNo(){
        this.signupform.get("mobileNo")?.setValue(9099090909)
      }
    
      patchData(){
        let responseObj = {
          "firstName":"Sam",
          "lastName":"Karan",
       }
       this.signupform.patchValue(responseObj);
      }
    
      get firstName(){
       return this.signupform.get("firstName");
      }
    
      get mobileNo(){
        return this.signupform.get("mobileNo");
      }
    
    }
    

