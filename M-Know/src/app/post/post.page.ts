import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RpostService } from '../Service/rpost.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  Post_Update: any;
  constructor(public navctrl: NavController, public restService: RpostService) {
    this.getPost();
   }
   getPost(){
    this.restService.getPost()
    .then(data=> {
    this.Post_Update= data;
      console.log(this.Post_Update);
    });
  }


}