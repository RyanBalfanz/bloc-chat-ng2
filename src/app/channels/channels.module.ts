import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { MessagesModule } from '../messages/messages.module';

import { ChannelListComponent }    from './channel-list.component';
import { ChannelItemComponent }  from './channel-item.component';

import { ChannelFactory } from './channel.factory';
import { ChannelService } from './channel.service';

import { ChannelsRoutingModule } from './channels-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AuthModule,
    MessagesModule,
    ChannelsRoutingModule
  ],
  declarations: [
    ChannelListComponent,
    ChannelItemComponent
  ],
  providers: [
    AuthService,
    ChannelFactory,
    ChannelService
  ]
})
export class ChannelsModule {}
