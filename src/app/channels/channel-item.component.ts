import 'rxjs/add/operator/switchMap';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2';

import { Channel } from './channel.model';
import { ChannelService } from './channel.service';
// import { Message } from '../messages/message.model';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.css']
})
export class ChannelItemComponent implements OnInit {
  channel: FirebaseObjectObservable<any>;
  messages: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ChannelService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getChannel(params['id']))
      .subscribe((channel: FirebaseObjectObservable<any>) => {
        this.channel = channel;
        this.messages = this.messageService.getMessagesByChannel(channel.$key);
      });

    // this.channel = this.service.getChannel(this.channelId);
    // this.messageService.getMessagesByChannel(this.channelId);
  }

}
