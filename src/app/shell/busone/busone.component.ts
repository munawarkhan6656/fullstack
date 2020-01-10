import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SignalRService } from '../../core/services/signal-r.service';
import { SeatBooking, BusInTrip } from '../../shared/interfaces';
import { LocalStorageService } from '../../core/services/local-storage.service';
// constants
import { appConstants } from '../../shared/constants/appConstants';

@Component({
  selector: 'app-busone',
  templateUrl: './busone.component.html',
  styleUrls: ['./busone.component.scss']
})
export class BusoneComponent implements OnInit {

  totalSeats = 4;
  noOfSeats = 0;
  groupName: string;
  userId: number;
  myResponse: BusInTrip;
  status = true;
  countOfSeats: number;
  counts: number[] = [];
  CurrentStop: string[] = [];

  constructor(private signarR: SignalRService, private localStorageService: LocalStorageService) {
    console.log('busone');
    setTimeout(() => {
      signarR.addUserToGroup(1);
    }, 1000);
  }

  async ngOnInit() {
    this.userId = this.localStorageService.getObject(appConstants.localStorage.UserId);
    this.myResponse = await this.signarR.busInfo(this.userId, 1);
    if (this.myResponse != null) {
      this.noOfSeats = this.myResponse.seatOccupy;
      this.status = this.myResponse.status === 'null' ? true : false;
    }

    this.countOfSeats = this.signarR.count;
    this.counts = this.signarR.Counts;
    this.CurrentStop = this.signarR.stop;

  }

  seatBooking() {
    const seatBookingPayload: SeatBooking = {
      groupName: 1,
      userId: this.userId,
      seatNo: 4 - this.noOfSeats,
    };
    this.signarR.seatReservation(seatBookingPayload);
    this.status = false;
  }

}
