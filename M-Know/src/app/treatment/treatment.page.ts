import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RTreatmentsService } from '../Service/rtreatment.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.page.html',
  styleUrls: ['./treatment.page.scss'],
})
export class TreatmentPage {
   Treatments: any;
  constructor(public navctrl: NavController, public restService: RTreatmentsService) {
    this.getTreatments();
   }
   getTreatments(){
    this.restService.getTreatments()
    .then(data=> {
    this.Treatments= data;
      console.log(this.Treatments);
    });
  }


}

