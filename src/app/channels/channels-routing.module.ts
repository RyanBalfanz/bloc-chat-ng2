import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChannelListComponent }    from './channel-list.component';
import { ChannelItemComponent }  from './channel-item.component';

const channelsRoutes: Routes = [
  { path: 'channels',  component: ChannelListComponent },
  { path: 'channel/:id', component: ChannelItemComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(channelsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChannelsRoutingModule { }
