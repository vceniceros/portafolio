import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
  constructor() { }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_emtp1n9', 'template_ns30nze', e.target as HTMLFormElement, 'U6JQI_TrlLKL4pvhT')
      .then((result: EmailJSResponseStatus) => {
        alert("mensaje enviado con exito");
      }, (error) => {
        alert("hubo un error en el envio, intentar nuevamente");
      });
  }
  ngOnInit(): void {
    
  }

}
