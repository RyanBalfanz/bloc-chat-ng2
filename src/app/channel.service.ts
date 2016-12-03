import { Injectable } from '@angular/core';

import { Channel } from './channel.model';
import { ChannelFactory } from './channel.factory';
import { CHANNELS } from './mock-channels';

@Injectable()
export class ChannelService {

  constructor(private ChannelFactory: ChannelFactory) {}

  addChannel(channelInfo: any): boolean {
    let newChannel = this.ChannelFactory.create(channelInfo);
    CHANNELS.push(newChannel);
    return true;
  }

  getChannels(): Channel[] {
    return CHANNELS;
    // return Promise.resolve(CHANNELS);
  }
}
