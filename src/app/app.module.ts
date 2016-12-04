import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChannelFactory } from './channel.factory';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelItemComponent } from './channel-item/channel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    ChannelItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChannelFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
