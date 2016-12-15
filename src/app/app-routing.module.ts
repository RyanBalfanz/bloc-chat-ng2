import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChannelListComponent } from './channel-list/channel-list.component';

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

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {}
