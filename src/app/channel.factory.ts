import { Injectable } from '@angular/core';

import { Channel } from './channel.model';

@Injectable()
export class ChannelFactory {
  private autoCreatedAt = true;

  create(channelInfo: any): Channel {
    const now = new Date();
    if (this.autoCreatedAt) {
      channelInfo.createdAt = channelInfo.createdAt || now.getTime();
    }
    return new Channel(channelInfo);
  }
}
