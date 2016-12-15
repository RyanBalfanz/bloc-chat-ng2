import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ChannelListComponent }    from './channel-list.component';
import { ChannelItemComponent }  from './channel-item.component';

import { ChannelFactory } from './channel.factory';
import { ChannelService } from './channel.service';

import { ChannelsRoutingModule } from './channels-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChannelsRoutingModule
  ],
  declarations: [
    ChannelListComponent,
    ChannelItemComponent
  ],
  providers: [
    ChannelFactory,
    ChannelService
  ]
})
export class ChannelsModule {}
