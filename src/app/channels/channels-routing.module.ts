import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';

import { ChannelListComponent }    from './channel-list.component';
import { ChannelItemComponent }  from './channel-item.component';

const channelsRoutes: Routes = [
  {
    path: 'channels',
    component: ChannelListComponent,
  },
  {
    path: 'channels/:id',
    component: ChannelItemComponent,
    canActivate: [ AuthGuard ]
  }
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
