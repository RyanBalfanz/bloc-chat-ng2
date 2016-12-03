import { Component } from '@angular/core';

import { Channel } from './channel.model';
import { ChannelService } from './channel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChannelService]
})
export class AppComponent {
  title = 'app works!';
  channels: Channel[] = [];

  constructor(private channelService: ChannelService) {
    this.channels = channelService.getChannels();
  }

  addChannel(name: HTMLInputElement): boolean {
    console.log(`Adding channel name: ${name.value}`);
    this.channelService.addChannel({
      name: name.value
    });
    return true;
  }
}
