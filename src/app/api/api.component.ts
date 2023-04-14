import { Component } from '@angular/core';
import {APIService} from "../api.service";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  postResult = "";
  getResult = "";

  constructor(private api: APIService) {

  }

  onPostClick(){
    this.api.getPOSTResult().subscribe(data => {
      this.postResult = data
    });
  }

  onGetClick(){
    this.api.getGETResult().subscribe(data => {
      this.getResult = data
    })

  }

  clear(){
    this.getResult ="";
    this.postResult="";
  }


}
