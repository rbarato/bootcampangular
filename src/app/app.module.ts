import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
