import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  channels: string[];

  constructor() {
    this.channels = ['Alpha', 'Beta', 'Gamma'];
  }

  ngOnInit() {
  }

}
