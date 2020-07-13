import { Injectable } from '@angular/core';
import { observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataService {
getData(){
  return [{"Email":"ali.adel20120@gmail.com" , "password":1234},
             {"Email":"Haimenth@gmail.com" , "password":4567},
             {"Email":"joe@gmail.com" ,"password":78910}]
}
  constructor() {}
  
}
