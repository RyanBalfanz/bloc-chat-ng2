import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ChannelFactory } from './channel.factory';
import { MessageFactory } from './message.factory';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelItemComponent } from './channel-item/channel-item.component';
import { MessageListComponent } from './message-list/message-list.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBOfR3VVMOJstKuar19gIshoU1dCTylXa4',
  authDomain: '<your-project-authdomain>',
  databaseURL: 'https://bloc-chat-ng2.firebaseio.com/',
  storageBucket: '<your-storage-bucket>'
};

@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    ChannelItemComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ChannelFactory, MessageFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
