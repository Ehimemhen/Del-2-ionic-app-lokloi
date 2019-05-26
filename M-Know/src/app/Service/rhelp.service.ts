import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RHelpService {

  apiURL= 'http://localhost:55144/api/';
  constructor( public http: HttpClient) {
    console.log('Rhelp api Service');
   }
   getHelps (){
    return new Promise(resolve =>{
      this.http.get(this.apiURL+'/Help_Line/Get').subscribe(data=> {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    }); 
  }
}
