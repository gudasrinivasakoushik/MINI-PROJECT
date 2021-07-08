import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavajavaService {

  url:string = 'assets/javajava.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getalljavacourse(){
     return this.httpClient.get(this.url)
}
}
