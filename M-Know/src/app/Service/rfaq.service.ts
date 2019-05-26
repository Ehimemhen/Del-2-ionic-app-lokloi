import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RfaqService {

  apiURL= 'http://localhost:55144/api/';
  constructor( public http: HttpClient) {
    console.log('Rfaq api Service');
   }
   getfaqs (){
    return new Promise(resolve =>{
      this.http.get(this.apiURL+'/faqs/Get').subscribe(data=> {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    }); 
  }
}
