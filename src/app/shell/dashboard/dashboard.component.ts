import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { SignalRService } from '../../core/services/signal-r.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private signalr: SignalRService) { }

  private hubConnection: HubConnection;
  nick = '';
  message = '';
  messages: string[] = [];


  public sendMessage(): void {

    this.signalr.sendMessage(this.nick, this.message);

    // this.hubConnection.invoke('JoinGroup', 'test');
  }

  ngOnInit() {
    // this.hubConnection.on('JoinGroup', (receivedMessage: string) => {
    //   console.log(receivedMessage);
    // });
  }
}
