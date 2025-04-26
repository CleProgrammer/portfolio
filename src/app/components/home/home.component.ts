import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import * as languageenglish from '../../../assets/languages/languageenglish.json'
import * as languageportuguese from '../../../assets/languages/languageportuguese.json'

//const c = (cl: string): HTMLAnchorElement | HTMLInputElement | HTMLElement | null => document.querySelector(cl) as HTMLAnchorElement | HTMLInputElement | HTMLElement;
const c = (cl: any)=> document.querySelector(cl)

@Component({
  selector: 'app-home',
  imports: [ChatbotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  languageDefault:string = 'language-en';
  languageEnglish: any = (languageenglish as any).default;
  languagePortuguese: any = (languageportuguese as any).default;
  

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }

  ChangeLanguage(e:any) {
    if( e.target.className !== this.languageDefault ) {
      if( e.target.className === "language-pt") {
        this.languageDefault = 'language-pt'
        //HEADER
        e.target.style.color = 'white'
        c(".language-en").style.color = 'wheat'
        c("#navhome").innerHTML = this.languagePortuguese.portuguese.header[0]
        c("#navaboutme").innerHTML = this.languagePortuguese.portuguese.header[1]
        c("#navprojects").innerHTML = this.languagePortuguese.portuguese.header[2]

        //INTRODUCING ME
        c("#div1").innerHTML = this.languagePortuguese.portuguese.mainSection[0]
        c("#div2").innerHTML = this.languagePortuguese.portuguese.mainSection[1]
        c("#div3").innerHTML = this.languagePortuguese.portuguese.mainSection[2]
        c("#div4 .button-resume a").innerHTML = this.languagePortuguese.portuguese.mainSection[3]
        c("#div4 .button-resume a").href = this.languagePortuguese.portuguese.mainSection[4]

        //ABOUT ME
        c(".about-me-text h1").innerHTML = this.languagePortuguese.portuguese.aboutMe[0]
        c(".about-me-text p").innerHTML = this.languagePortuguese.portuguese.aboutMe[1]

        //PROJECTS
        c("#project1-title").innerHTML = this.languagePortuguese.portuguese.projects[0][0][0]
        c("#project1-access").innerHTML = this.languagePortuguese.portuguese.projects[0][0][1]
        c("#project1-description").innerHTML = this.languagePortuguese.portuguese.projects[0][1]

        c("#project2-title").innerHTML = this.languagePortuguese.portuguese.projects[1][0][0]
        c("#project2-access").innerHTML = this.languagePortuguese.portuguese.projects[1][0][1]
        c("#project2-description").innerHTML = this.languagePortuguese.portuguese.projects[1][1]

        c("#project3-title").innerHTML = this.languagePortuguese.portuguese.projects[2][0][0]
        c("#project3-access").innerHTML = this.languagePortuguese.portuguese.projects[2][0][1]
        c("#project3-description").innerHTML = this.languagePortuguese.portuguese.projects[2][1]

        c("#project4-title").innerHTML = this.languagePortuguese.portuguese.projects[3][0][0]
        c("#project4-access").innerHTML = this.languagePortuguese.portuguese.projects[3][0][1]
        c("#project4-description").innerHTML = this.languagePortuguese.portuguese.projects[3][1]

        c("#project5-title").innerHTML = this.languagePortuguese.portuguese.projects[4][0][0]
        c("#project5-access").innerHTML = this.languagePortuguese.portuguese.projects[4][0][1]
        c("#project5-description").innerHTML = this.languagePortuguese.portuguese.projects[4][1]

        c("#project6-title").innerHTML = this.languagePortuguese.portuguese.projects[5][0][0]
        c("#project6-access").innerHTML = this.languagePortuguese.portuguese.projects[5][0][1]
        c("#project6-description").innerHTML = this.languagePortuguese.portuguese.projects[5][1]

        //CONTACT
        c(".contact-title").innerHTML = this.languagePortuguese.portuguese.contact[0]
        c(".contact-name").placeholder = this.languagePortuguese.portuguese.contact[1]
        c(".contact-email").placeholder = this.languagePortuguese.portuguese.contact[2]
        c(".contact-subject").placeholder = this.languagePortuguese.portuguese.contact[3]
        c("textarea").placeholder = this.languagePortuguese.portuguese.contact[4]
        c(".send-message").innerHTML = this.languagePortuguese.portuguese.contact[5]

        //FOOTER
        c("#footerhome").innerHTML = this.languagePortuguese.portuguese.footer[0]
        c("#footeraboutme").innerHTML = this.languagePortuguese.portuguese.footer[1]
        c("#footerprojects").innerHTML = this.languagePortuguese.portuguese.footer[2]
        c("#footercontact").innerHTML = this.languagePortuguese.portuguese.footer[3]
        c(".website-rights").innerHTML = this.languagePortuguese.portuguese.footer[4]

        //CHATBOT
        c(".chat-bot-question").innerHTML = this.languagePortuguese.portuguese.chatbot[0]
        c("#resumebot").innerHTML = this.languagePortuguese.portuguese.chatbot[1]
        c("#resumebot").href = this.languagePortuguese.portuguese.chatbot[5]
        c("#aboutmebot").innerHTML = this.languagePortuguese.portuguese.chatbot[2]
        c("#projectsbot").innerHTML = this.languagePortuguese.portuguese.chatbot[3]
        c("#contactbot").innerHTML = this.languagePortuguese.portuguese.chatbot[4]

      } else {
        this.languageDefault = 'language-en'
        //HEADER
        e.target.style.color = 'white'
        c(".language-pt").style.color = 'wheat'
        c("#navhome").innerHTML = this.languageEnglish.english.header[0]
        c("#navaboutme").innerHTML = this.languageEnglish.english.header[1]
        c("#navprojects").innerHTML = this.languageEnglish.english.header[2]

        //INTRODUCING ME
        c("#div1").innerHTML = this.languageEnglish.english.mainSection[0]
        c("#div2").innerHTML = this.languageEnglish.english.mainSection[1]
        c("#div3").innerHTML = this.languageEnglish.english.mainSection[2]
        c("#div4 .button-resume a").innerHTML = this.languageEnglish.english.mainSection[3]
        c("#div4 .button-resume a").href = this.languageEnglish.english.mainSection[4]

        //ABOUT ME
        c(".about-me-text h1").innerHTML = this.languageEnglish.english.aboutMe[0]
        c(".about-me-text p").innerHTML = this.languageEnglish.english.aboutMe[1]

        //PROJECTS
        c("#project1-title").innerHTML = this.languageEnglish.english.projects[0][0][0]
        c("#project1-access").innerHTML = this.languageEnglish.english.projects[0][0][1]
        c("#project1-description").innerHTML = this.languageEnglish.english.projects[0][1]

        c("#project2-title").innerHTML = this.languageEnglish.english.projects[1][0][0]
        c("#project2-access").innerHTML = this.languageEnglish.english.projects[1][0][1]
        c("#project2-description").innerHTML = this.languageEnglish.english.projects[1][1]

        c("#project3-title").innerHTML = this.languageEnglish.english.projects[2][0][0]
        c("#project3-access").innerHTML = this.languageEnglish.english.projects[2][0][1]
        c("#project3-description").innerHTML = this.languageEnglish.english.projects[2][1]

        c("#project4-title").innerHTML = this.languageEnglish.english.projects[3][0][0]
        c("#project4-access").innerHTML = this.languageEnglish.english.projects[3][0][1]
        c("#project4-description").innerHTML = this.languageEnglish.english.projects[3][1]

        c("#project5-title").innerHTML = this.languageEnglish.english.projects[4][0][0]
        c("#project5-access").innerHTML = this.languageEnglish.english.projects[4][0][1]
        c("#project5-description").innerHTML = this.languageEnglish.english.projects[4][1]

        c("#project6-title").innerHTML = this.languageEnglish.english.projects[5][0][0]
        c("#project6-access").innerHTML = this.languageEnglish.english.projects[5][0][1]
        c("#project6-description").innerHTML = this.languageEnglish.english.projects[5][1]

        //CONTACT
        c(".contact-title").innerHTML = this.languageEnglish.english.contact[0]
        c(".contact-name").placeholder = this.languageEnglish.english.contact[1]
        c(".contact-email").placeholder = this.languageEnglish.english.contact[2]
        c(".contact-subject").placeholder = this.languageEnglish.english.contact[3]
        c("textarea").placeholder = this.languageEnglish.english.contact[4]
        c(".send-message").innerHTML = this.languageEnglish.english.contact[5]

        //FOOTER
        c("#footerhome").innerHTML = this.languageEnglish.english.footer[0]
        c("#footeraboutme").innerHTML = this.languageEnglish.english.footer[1]
        c("#footerprojects").innerHTML = this.languageEnglish.english.footer[2]
        c("#footercontact").innerHTML = this.languageEnglish.english.footer[3]
        c(".website-rights").innerHTML = this.languageEnglish.english.footer[4]

        //CHATBOT
        c(".chat-bot-question").innerHTML = this.languageEnglish.english.chatbot[0]
        c("#resumebot").innerHTML = this.languageEnglish.english.chatbot[1]
        c("#resumebot").href = this.languageEnglish.english.chatbot[5]
        c("#aboutmebot").innerHTML = this.languageEnglish.english.chatbot[2]
        c("#projectsbot").innerHTML = this.languageEnglish.english.chatbot[3]
        c("#contactbot").innerHTML = this.languageEnglish.english.chatbot[4]
      }
    }
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
