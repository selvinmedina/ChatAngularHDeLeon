import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Message } from '../Interfaces';
import { ChatService } from '../service/chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html'
})

export class ChatComponent {
  public lstMessages: Observable<Message[]>;
  public nameControl: FormControl;
  public textControl: FormControl;
  @ViewChild('text') text: ElementRef;

  constructor(protected http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    protected chatService: ChatService ) {
    this.getInfo();
    this.nameControl = new FormControl('');
    this.textControl = new FormControl('');
  }

  public getInfo() {
    this.lstMessages = this.chatService.getMessage();
  }

  public sendMessage() {
    this.chatService.Add(this.nameControl.value, this.textControl.value);

    setTimeout(() => {
      this.getInfo();
      this.text.nativeElement.focus();
    },300);

    this.textControl.setValue('');
  }
}

