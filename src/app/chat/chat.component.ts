import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked} from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit {

  public mensagens: Object[] = [];
  public mensagemInserir: string;

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  constructor(private _chatService: ChatService) {
    _chatService.server.on('messages',
      message => {
      this.mensagens.push(message)}
    )
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  public enviaMensagem(): void {
    let obj = {message: this.mensagemInserir, author: this._chatService.nomeUsuario};

    this._chatService.server.emit('messages', obj);

    this.mensagemInserir = '';
  }
}
