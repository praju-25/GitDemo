import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-own-model-template',
  templateUrl: './own-model-template.component.html',
  styleUrls: ['./own-model-template.component.css']
})
export class OwnModelTemplateComponet {

  ngOnInit(): void {
    this.States = Object.keys(this.stateObj);
  }

  States:string[]=[];
  Cities:string[]=["plaese select city"];

  signUpobj:SignUpform = new SignUpform();

   stateObj:any = {
     "Maharashtra":["Pune","Mumbai","Nashik","Sangli"],
    "Mp":["Ujjain","Indore","Bhopal"],
     "Up":["Agra","Lucknow","Ayodya"]
   }  
   savedata()
   {
     console.log("values",this.signUpobj);
   }
   getCity()
   {
     console.log(this.signUpobj.State);
    this.Cities = this.stateObj[this.signUpobj.State];
   }
    getdata(){
    let obj={
      firstName:"prajakta",
      lastName:"shinde",
      dob:0,
      age:0,
     mobileNo:9096746998,
     email:"demo@gmail.com",
     password:"hello123",
     State:"maharashtra",
     City:"sangli"
   }
    this.signUpobj = obj;
   }
  
   calculateAge(){
    let dob=this.signUpobj.dob;
    if(dob)
    {
      let timediff=Math.abs(Date.now()-new Date(dob).getTime());
      console.log(timediff);
      let currentage=timediff/(1000*3600*24*365.25);
      this.signUpobj.age=Math.floor(currentage);
    }
  
   }
  }

export class SignUpform{
  firstName!:string;
  lastName!:string;
  dob!:number;
  age!:number;
  mobileNo!:number;
  email!:string;
  password!:string;
  State!:string;
  City!:string;

  
}