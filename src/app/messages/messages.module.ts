import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { MessageListComponent }    from './message-list.component';

import { MessageFactory } from './message.factory';
import { MessageService } from './message.service';

import { MessageRoutingModule } from './messages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessageRoutingModule
  ],
  declarations: [
    MessageListComponent
  ],
  providers: [
    MessageFactory,
    MessageService
  ]
})
export class MessagesModule {}
