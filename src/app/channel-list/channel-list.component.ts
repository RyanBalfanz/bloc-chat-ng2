import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Channel } from '../channel.model';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  @Input() channels: Channel[];

  constructor() { }

  ngOnInit() {
  }

}
