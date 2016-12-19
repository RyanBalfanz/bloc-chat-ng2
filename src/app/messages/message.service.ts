import { Injectable } from '@angular/core';

import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';

import { AuthService } from '../auth/auth.service';

import { Message } from './message.model';
import { MessageFactory } from './message.factory';

@Injectable()
export class MessageService {
  private orderByKey: boolean = true;

  constructor(
    private angularFire: AngularFire,
    private authService: AuthService,
    private messageFactory: MessageFactory
  ) { }

  addMessage(channelId: string, content: string): boolean {
    if (this.authService.isAuthenticated()) {
      let userId = this.authService.getUserId();
      let newMessage = this.messageFactory.create({
        userId: userId,
        channelId: channelId,
        content: content,
      });
      this.angularFire.database.list('/messages').push(newMessage);
      return true;
    }
    return false;
  }

  getChannel(pk: string): FirebaseObjectObservable<any> {
    let ref = `/channels/${pk}`;
    return this.angularFire.database.object(ref);
  }

  getMessages(): FirebaseListObservable<Message[]> {
    console.log('Getting messages');
    const query = {
      orderByKey: this.orderByKey,
    };
    return this.angularFire.database.list('/messages', { query: query });
  }

  getMessagesByChannel(channelId: string): FirebaseListObservable<Message[]> {
    console.log(`Getting messages for channel ${channelId}`);
    const orderByChild = 'channelId';
    const query = {
      equalTo: channelId,
      orderByChild: orderByChild,
    };
    return this.angularFire.database.list('/messages', { query: query });
  }

}
