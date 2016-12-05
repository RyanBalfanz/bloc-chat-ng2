import {
  Component,
  OnInit
} from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';

import { Channel } from './channel.model';
import { ChannelService } from './channel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChannelService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  channels: FirebaseListObservable<Channel[]>;

  constructor(private channelService: ChannelService) { }

  addChannel(name: HTMLInputElement): boolean {
    console.log(`Adding channel name: ${name.value}`);
    this.channelService.addChannel({
      name: name.value
    });
    return true;
  }

  ngOnInit() {
    this.channels = this.channelService.getChannels();
  }
}
