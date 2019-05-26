import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RPublicationService {

  apiURL= 'http://localhost:55144/api/';
  constructor( public http: HttpClient) {
    console.log('RPublication api Service');
   }
   getPublications (){
    return new Promise(resolve =>{
      this.http.get(this.apiURL+'/Publications/Get').subscribe(data=> {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    }); 
  }
}
