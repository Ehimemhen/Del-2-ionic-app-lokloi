import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RHelpService } from '../Service/rhelp.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage {
  Helpline: any;
  constructor(public navctrl: NavController, public restService: RHelpService) {
    this.getHelps();
   }
   getHelps(){
    this.restService.getHelps()
    .then(data=> {
    this.Helpline= data;
      console.log(this.Helpline);
    });
  }


}