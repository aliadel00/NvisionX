import { Component,OnInit } from '@angular/core';
import { DataService } from "../data.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder ,Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RouterLink, RouterLinkWithHref, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public invalid = false
  public valid = false
  constructor(private data : DataService,private fb:FormBuilder,private router:Router) { }
  registrationform = this.fb.group({
    Email: ['',[Validators.required,Validators.email]],
    c_Email:  ['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(4)]],
    c_password:['',[Validators.required,Validators.minLength(4)]]
  })
  ngOnInit(): void {
  }
 
  public validation(email,c_email,password,c_password){
     if(email===c_email&&password===c_password&&(email!==''&&password!=='')){
       this.valid = true
       console.log("valid")
       this.registrationform.reset()
     }else{
       this.invalid = true
     }
  }
  public logger(){
   this.router.navigate(["/Login"])
  }
  getRecord(){
    this.data.getData()
    .subscribe(data=>{
      this.data=data
      console.log(this.data)
    })
  }

  createRecord(){
    console.log(this.registrationform)
    this.data.createData(this.registrationform.value)
    .subscribe(data=>{
      this.getRecord()
      this.registrationform.reset()
    })
  }
}
