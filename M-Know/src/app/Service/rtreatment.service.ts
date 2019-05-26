import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RTreatmentsService {

  apiURL= 'http://localhost:55144/api/';
  constructor( public http: HttpClient) {
    console.log('RTreatments api Service');
   }
   getTreatments (){
    return new Promise(resolve =>{
      this.http.get(this.apiURL+'/Treatments/Get').subscribe(data=> {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    }); 
  }
}
