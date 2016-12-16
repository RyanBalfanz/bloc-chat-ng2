import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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

  constructor(
    private service: ChannelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.channels = this.service.getChannels();
  }

  onSelect(channelId: string): void {
    this.router.navigate(['/channels', channelId]);
  }

}
