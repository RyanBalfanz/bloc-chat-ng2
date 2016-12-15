import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.css']
})
export class ChannelItemComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
