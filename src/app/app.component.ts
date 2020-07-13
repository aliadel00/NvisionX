import { Component,OnInit } from '@angular/core';
import { DataService } from "./data.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder ,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private data : DataService,private fb:FormBuilder) { }
    registrationform = this.fb.group({
    Email: ['',Validators.required],
    password:[null,[Validators.required,Validators.minLength(3)]]
  })
  public validator
  public Data=[] 
  public valid =false
  ngOnInit(): void {
    this.Data = this.data.getData()
  }
  public validation(email,password){

  this.validator = {"email":email,"password":password}
  this.Data.forEach(element => {
    if(element.Email===this.validator.email&&element.password===this.validator.password){
      console.log("vaild")}
      this.valid=true
  })
 }
}


