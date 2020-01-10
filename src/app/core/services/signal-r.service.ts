import { Injectable, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';
import { SeatBooking } from '../../shared/interfaces';
import { map } from 'rxjs/internal/operators';
import { BusInTrip } from '../../shared/interfaces';
import { LocalStorageService } from './local-storage.service';
// constants
import { appConstants } from '../../shared/constants/appConstants';

@Injectable()
export class SignalRService {

  private hubConnection: HubConnection;
  nick = '';
  message = '';
  Counts: number[] = [];
  count: number;
  stop: string[] = [];

  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://172.17.55.196/message')
      .build();

    this.hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public sendMessage(nick, message) {
    this.hubConnection
      .send('sendToAll', nick, message)
      .then(() => console.log('timer'))
      .catch(err => console.error(err));
  }

  public addUserToGroup(groupName: number) {
    this.hubConnection.invoke('AddUserToGroup', groupName)
      .then(() => console.log('timer'))
      .catch(err => console.error(err));
  }

  seatReservation(seatbooking: SeatBooking) {
    this.hubConnection
      .send('sendMessageToGroup', seatbooking.groupName, seatbooking.userId, seatbooking.seatNo)
      .then(() => console.log('caleedddd'))
      .catch(err => console.error(err));
  }

  busInfo(userId: number, busId: number): Promise<BusInTrip> {
    return this.httpClient.get<BusInTrip>(`/api/v1/BusInTrip/BusInfo?userId=${userId}&busId=${busId}`)
      .pipe(map((response: any) => response.result))
      .toPromise();
  }

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    console.log('signalr');
    this.startConnection();

    this.hubConnection.on('reveiveMessage', (count: number) => {
      this.Counts.push(count);
      this.count = count;
      console.log(this.count);
    });

    this.hubConnection.on('busOneStatus', (stop: string) => {
      this.stop.push(stop);
    });

    // this.hubConnection.invoke('JoinGroup', 'busone')
    //   .then(() => this.message = '')
    //   .catch(err => console.error());

  }


}
