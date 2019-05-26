import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RPreventionService } from '../Service/rprevention.service';

@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.page.html',
  styleUrls: ['./prevention.page.scss'],
})
export class PreventionPage {
   Preventions: any;
  constructor(public navctrl: NavController, public restService: RPreventionService) {
    this.getPreventions();
   }
   getPreventions(){
    this.restService.getPreventions()
    .then(data=> {
    this.Preventions= data;
      console.log(this.Preventions);
    });
  }


}
