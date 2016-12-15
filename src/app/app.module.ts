import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ChannelFactory } from './channel.factory';
import { MessageFactory } from './message.factory';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelItemComponent } from './channel-item/channel-item.component';
import { MessageListComponent } from './message-list/message-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/channels',
    pathMatch: 'full'
  },
  {
    path: 'channels',
    component: ChannelListComponent,
    data: {
      title: 'Channel List'
    }
  },
];

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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ChannelFactory, MessageFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
