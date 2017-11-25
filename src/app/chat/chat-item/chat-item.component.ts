import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent {
  @Input() public mensagem: string;
  public hora: Date;

  constructor() { 
    this.hora = new Date();

  }

}
