import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  addChannel(name: HTMLInputElement): boolean {
    console.log(`Adding channel name: ${name.value}`);
    return false;
  }
}
