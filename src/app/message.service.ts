import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';

import { Message } from './message.model';
import { MessageFactory } from './message.factory';

@Injectable()
export class MessageService {
  private limitToLast: Subject<any>;
  private orderByKey: boolean = true;

  constructor(private angularFire: AngularFire, private messageFactory: MessageFactory) {
    this.limitToLast = new Subject();
    this.init();
  }

  addMessage(channelId: string, content: string): boolean {
    let newMessage = this.messageFactory.create({
      channelId: channelId,
      content: content,
    });
    this.angularFire.database.list('/messages').push(newMessage);
    return false;
  }

  getChannel(pk: string): FirebaseObjectObservable<any> {
    let ref = `/channels/${pk}`;
    return this.angularFire.database.object(ref);
  }

  getMessages(): FirebaseListObservable<Message[]> {
    console.log('Getting messages');
    const query = {
      limitToLast: this.limitToLast,
      orderByKey: this.orderByKey,
    };
    return this.angularFire.database.list('/messages', { query: query });
  }

  getMessagesByChannel(channelId: string): FirebaseListObservable<Message[]> {
    console.log(`Getting messages for channel ${channelId}`);
    const orderByChild = 'channelId';
    const query = {
      equalTo: channelId,
      limitToLast: this.limitToLast,
      orderByChild: orderByChild,
    };
    return this.angularFire.database.list('/messages', { query: query });
  }

  private init(): void {
    const limitToLast = 10;
    this.setLimitToLast(limitToLast);
    setTimeout(() => { this.setLimitToLast(limitToLast); });
  }

  private setLimitToLast(n: number): void {
    this.limitToLast.next(n);
  }
}
