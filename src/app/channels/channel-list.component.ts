import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';

import { Channel } from './channel.model';
import { ChannelService } from './channel.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  @Input() channels: FirebaseListObservable<Channel[]>;

  constructor(private service: ChannelService) { }

  ngOnInit() {
    this.channels = this.service.getChannels();
  }

}
