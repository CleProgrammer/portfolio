import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  ngOnInit():void {
    
  }
  openChatBot(e:Event):void {
    const openChat = document.querySelector('.chat-bot') as HTMLElement
    const closeChat = document.querySelector('.icon-chat-bot-message') as HTMLElement

    const openSound = new Audio('assets/sounds/open-chatbot.mp3');
    const closeSound = new Audio('assets/sounds/close-chatbot.mp3');
    
    if( openChat.id === 'closed' ) {
      openSound.play()
      openSound.volume = 0.4
      openChat.style.display = 'flex'
      closeChat.style.display = 'none'
      openChat.id = 'open'
      closeChat.id = 'closed'
    } else {
      closeSound.play()
      closeSound.volume = 0.4
      openChat.style.display = 'none'
      closeChat.style.display = 'flex'
      openChat.id = 'closed'
      closeChat.id = 'open'
    }
  }
}
