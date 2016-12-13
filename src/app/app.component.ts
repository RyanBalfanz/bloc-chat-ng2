import {
  Component,
  OnInit
} from '@angular/core';

import {
  FirebaseListObservable,
} from 'angularfire2';

import { Channel } from './channel.model';
import { ChannelService } from './channel.service';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChannelService, MessageService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  channels: FirebaseListObservable<Channel[]>;
  messages: FirebaseListObservable<Message[]>;
  private channelId: string = '-KYh6G2355fNnMhL6Z2l';

  constructor(private channelService: ChannelService, private messageService: MessageService) { }

  addChannel(name: HTMLInputElement): boolean {
    console.log(`Adding channel name: ${name.value}`);
    this.channelService.addChannel({
      name: name.value
    });
    return true;
  }

  ngOnInit(): void {
    this.getChannels();
    this.getMessages(this.channelId);
  }

  private getChannels(): void {
    this.channels = this.channelService.getChannels();
  }

  private getMessages(channelId?: string | null): void {
    if (channelId) {
      this.messages = this.messageService.getMessagesByChannel(channelId);
    } else {
      this.messages = this.messageService.getMessages();
    }
  }
}
