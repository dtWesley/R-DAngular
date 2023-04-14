import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(environment.SERVICE_ID, environment.TEMPLATE_ID, e.target as HTMLFormElement, environment.PUBLIC_KEY_MAIL)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("succes")
      }, (error) => {
        console.log(error.text);
        alert("failed")
      });
  }
}
