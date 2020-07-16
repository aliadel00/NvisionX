import { Injectable } from '@angular/core';
import { observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataService{
  constructor() {}
  public email
  public password
getData(){
  if(this.email!==null&&this.password!==null){
  return [{"Email":this.email , "password":this.password}]
  }
  else{
    console.log("failed to retrive data")
  }
}
}
