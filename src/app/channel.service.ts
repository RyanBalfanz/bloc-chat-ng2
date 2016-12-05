import { Injectable } from '@angular/core';

import {
  AngularFire,
  FirebaseListObservable
} from 'angularfire2';

import { Channel } from './channel.model';
import { ChannelFactory } from './channel.factory';

@Injectable()
export class ChannelService {
  channels: FirebaseListObservable<Channel[]>;

  constructor(private angularFire: AngularFire, private ChannelFactory: ChannelFactory) {
    this.channels = angularFire.database.list('/channels');
  }

  addChannel(channelInfo: Channel): boolean {
    let newChannel = this.ChannelFactory.create(channelInfo);
    this.channels.push(newChannel);
    return true;
  }

  getChannels(): FirebaseListObservable<Channel[]> {
    return this.channels;
  }
}
