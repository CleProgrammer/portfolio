import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import { ChatbotComponent } from '../chatbot/chatbot.component';

const c = (cl:string) => document.querySelector(cl)

@Component({
  selector: 'app-home',
  imports: [ChatbotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{
  constructor() {}

  ngOnInit() {
    AOS.init();
  }

  sendMessage() {
    const sendMessage = document.querySelector('.form-send-message') as HTMLElement
    const sentMessage = document.querySelector('.contact-title') as HTMLElement

    const form = document.getElementById('contact-form') as HTMLFormElement;
    const statusMessage = document.getElementById('statusMessage');

    
      form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o redirecionamento padrão
  
        const formData = new FormData(form);
  
        fetch("https://formsubmit.co/clebsondev@hotmail.com", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            sendMessage.style.display = 'none'
            sentMessage.style.fontSize = '2vw'
            sentMessage.innerText = "Sending message...";
            setTimeout(() => {
              sentMessage.innerHTML = 'Message sent successfully!'
            }, 3000)
            form.reset();
          } else {
            sentMessage.innerText = "Error sending. Please try again.";
          }
        }).catch(error => {
          sentMessage.innerText = "Unexpected error.";
        });
      });
  }
}
