import {
  Component,
  // Input,
  OnInit
} from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';

// import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages: FirebaseListObservable<any[]>;

  constructor(private service: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  private getMessages(): void {
    this.messages = this.service.getMessages();
  }

}
