import { Injectable } from '@angular/core';

import { Message } from './message.model';

@Injectable()
export class MessageFactory {
  private autoCreatedAt = true;

  create(messageInfo: any): Message {
    const now = new Date();
    if (this.autoCreatedAt) {
      messageInfo.createdAt = messageInfo.createdAt || now.getTime();
    }
    return new Message(messageInfo);
  }
}
