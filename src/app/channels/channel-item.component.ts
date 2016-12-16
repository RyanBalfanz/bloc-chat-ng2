import 'rxjs/add/operator/switchMap';
import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2';

import { ChannelService } from './channel.service';
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
    private service: ChannelService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getChannel(params['id']))
      .subscribe((channel: any) => {
        this.channel = channel;
        this.messages = this.messageService.getMessagesByChannel(channel.$key);
      });
  }

  addMessage(content: HTMLInputElement): void {
    this.messageService.addMessage(this.channel.$key, content.value);
    content.value = '';
  }

}
