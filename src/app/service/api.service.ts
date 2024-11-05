import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { id } from "../../app/type";
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }
  private baseurl:string = 'https://muhammadshamoonhussain.github.io/prodb/db.json'
  getproduct(data:any){
    return this.http.post(`${this.baseurl}/product`,data);
  }
  getproductlist(){
    return this.http.get(this.baseurl).pipe(map((a:any) => a.product))
  }
  getproductlisst(id:string) :Observable<id[]>{
    return this.http.get<id[]>(this.baseurl).pipe(map((a:any)=> a.product.find((pro:any)=> pro.id === id )))
  }
  getContact(data:any){
    return this.http.post('http://localhost:3000/contact',data)
  }
  getcheck(data:any){
  return this.http.post('http://localhost:3000/check',data)
  }
}
