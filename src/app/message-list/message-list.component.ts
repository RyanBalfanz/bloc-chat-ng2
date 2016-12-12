import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  @Input() messages: Message[] = [];

  constructor() { }

  ngOnInit() {
  }

}
