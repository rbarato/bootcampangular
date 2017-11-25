import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {
  public usuario: string;
  public logTime: Date;

  constructor(private _chatService: ChatService) { 
    this.usuario = this._chatService.usuario;
    this.logTime = this._chatService.loggedTime;
  }
}
