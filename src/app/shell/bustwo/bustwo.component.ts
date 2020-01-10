import { Component, OnInit } from '@angular/core';
import { BusInTrip, SeatBooking } from 'src/app/shared/interfaces';
import { SignalRService } from 'src/app/core/services/signal-r.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { appConstants } from 'src/app/shared/constants/appConstants';

@Component({
  selector: 'app-bustwo',
  templateUrl: './bustwo.component.html',
  styleUrls: ['./bustwo.component.scss']
})
export class BustwoComponent implements OnInit {

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
      signarR.addUserToGroup(2);
    }, 1000);
  }


  async ngOnInit() {
    this.userId = this.localStorageService.getObject(appConstants.localStorage.UserId);
    this.myResponse = await this.signarR.busInfo(this.userId, 2);
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
      groupName: 2,
      userId: this.userId,
      seatNo: 4 - this.noOfSeats,
    };
    this.signarR.seatReservation(seatBookingPayload);
    this.status = false;
  }

}
