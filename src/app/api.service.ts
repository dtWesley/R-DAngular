import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  public getPOSTResult(){
   return  this.http.post<any>('http://localhost:3500/add',{word: "Hello"})
  }

  public getGETResult(){
    return this.http.get<any>('http://localhost:3500/test')
  }

}
