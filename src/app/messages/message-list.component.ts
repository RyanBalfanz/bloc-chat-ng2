import {
  Component,
  // Input,
  OnInit
} from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';

import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages: FirebaseListObservable<Message[]>;

  constructor(private service: MessageService) { }

  ngOnInit() {
    this.messages = this.service.getMessages();
  }

}
