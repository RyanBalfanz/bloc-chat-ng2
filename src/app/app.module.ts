import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChannelsModule } from './channels/channels.module';

import { MessageFactory } from './message.factory';
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
    MessageListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChannelsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [MessageFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
