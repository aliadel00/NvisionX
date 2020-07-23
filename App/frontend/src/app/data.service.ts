import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root' 
})
export class DataService{
  constructor(private http : HttpClient ) {}
  getData(){
    return this.http.get<any>(`http://localhost:8000/api/data/get`)
  }
  createData(record){
    return this.http.post<any>(`http://localhost:8000/api/data/create`,record)
  }
}
