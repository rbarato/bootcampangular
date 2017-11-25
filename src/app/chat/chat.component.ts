import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public mensagens: string[] = [];
  public mensagemInserir: string;
  //@view public campoText: 

  constructor() {
   
  }

  public enviaMensagem(): void {
    this.mensagens.push(this.mensagemInserir);

    this.mensagemInserir = '';
  }
}
