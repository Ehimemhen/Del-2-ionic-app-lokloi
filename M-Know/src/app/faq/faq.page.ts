import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RfaqService } from '../Service/rfaq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqsPage {
   faqs: any;
  constructor(public navctrl: NavController, public restService: RfaqService) {
    this.getfaqs();
   }
   getfaqs(){
    this.restService.getfaqs()
    .then(data=> {
    this.faqs= data;
      console.log(this.faqs);
    });
  }


}