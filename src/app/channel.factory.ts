import { Injectable } from '@angular/core';

import { Channel } from './channel.model';

@Injectable()
export class ChannelFactory {
  create(channelInfo: any): Channel {
    return new Channel(channelInfo);
  }
}
