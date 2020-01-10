import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/core/services/signal-r.service';

@Component({
  selector: 'app-adminb1',
  templateUrl: './adminb1.component.html',
  styleUrls: ['./adminb1.component.scss']
})
export class Adminb1Component implements OnInit {
  CurrentStop: string[] = [];
  constructor(private signalr: SignalRService) {
    setTimeout(() => {
      signalr.addUserToGroup(1);
    }, 1000);
  }

  ngOnInit() {
    this.CurrentStop = this.signalr.stop;
  }

}
