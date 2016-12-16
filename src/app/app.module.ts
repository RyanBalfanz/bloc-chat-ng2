import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChannelsModule } from './channels/channels.module';
import { MessagesModule } from './messages/messages.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyBOfR3VVMOJstKuar19gIshoU1dCTylXa4',
  authDomain: '<your-project-authdomain>',
  databaseURL: 'https://bloc-chat-ng2.firebaseio.com/',
  storageBucket: '<your-storage-bucket>'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChannelsModule,
    MessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
