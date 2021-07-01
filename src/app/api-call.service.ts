import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http : HttpClient) { }

  private apiEndpoint = "https://exampleproject-ac932-default-rtdb.firebaseio.com/post.json";

  firebaseGetCall(){
    return this.http.get(this.apiEndpoint);
  }

  firebasePostCall(payload){
    return this.http.post(this.apiEndpoint, payload);
  }
}
