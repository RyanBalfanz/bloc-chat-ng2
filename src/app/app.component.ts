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
  selectedChannelId: string | null = null;

  constructor(private channelService: ChannelService, private messageService: MessageService) { }

  addChannel(name: HTMLInputElement): boolean {
    console.log(`Adding channel name: ${name.value}`);
    this.channelService.addChannel({
      name: name.value
    });
    return true;
  }

  addMessage(content: HTMLInputElement): boolean {
    console.log(`Adding message content: ${content.value}`);
    this.messageService.addMessage(this.selectedChannelId, content.value);
    return true;
  }

  ngOnInit(): void {
    this.getChannels();
    this.getMessages();
  }

  selectChannel(channelId: string): void {
    console.log(`Select channel ${channelId}`);
    this.selectedChannelId = channelId;
    this.getMessages();
  }

  private getChannels(): void {
    this.channels = this.channelService.getChannels();
  }

  private getMessages(): void {
    this.messages = this.messageService.getMessagesByChannel(this.selectedChannelId);
  }
}
