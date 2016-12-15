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
    this.angularFire = angularFire;
    this.init();
  }

  addChannel(channelInfo: Object): boolean {
    let newChannel = this.ChannelFactory.create(channelInfo);
    this.channels.push(newChannel);
    return true;
  }

  getChannels(): FirebaseListObservable<Channel[]> {
    return this.channels;
  }

  private init(): void {
    this.channels = this.angularFire.database.list('/channels');
  }
}
