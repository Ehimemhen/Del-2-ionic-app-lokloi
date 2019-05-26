import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RPublicationService } from '../Service/rpublication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage {
   Publications: any;
  constructor(public navctrl: NavController, public restService: RPublicationService) {
    this.getPublications();
   }
   getPublications(){
    this.restService.getPublications()
    .then(data=> {
    this.Publications= data;
      console.log(this.Publications);
    });
  }


}
