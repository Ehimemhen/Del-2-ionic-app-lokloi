import { Component  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage  {

   About_Malaria: any;
  constructor( public navctrl: NavController, public restService: RestService) { 
     this.getAboutMalaria();
  }

  getAboutMalaria(){
    this.restService.getAboutMalaria()
    .then(data=> {
    this.About_Malaria = data;
      console.log(this.About_Malaria);
    });
  }


}
