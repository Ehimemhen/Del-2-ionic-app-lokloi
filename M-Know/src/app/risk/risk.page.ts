import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RriskService } from '../Service/rrisk.service';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.page.html',
  styleUrls: ['./risk.page.scss'],
})
export class RiskPage {
  Malaria_Risk_Zone: any;
  constructor(public navctrl: NavController, public restService: RriskService) {
    this.getRisk();
   }
   getRisk(){
    this.restService.getRisk()
    .then(data=> {
    this.Malaria_Risk_Zone= data;
      console.log(this.Malaria_Risk_Zone);
    });
  }


}
