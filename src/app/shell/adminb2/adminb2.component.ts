import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/core/services/signal-r.service';

@Component({
  selector: 'app-adminb2',
  templateUrl: './adminb2.component.html',
  styleUrls: ['./adminb2.component.scss']
})
export class Adminb2Component implements OnInit {
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
