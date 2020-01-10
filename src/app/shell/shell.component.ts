import { Component, OnInit } from '@angular/core';
import {MatButtonModule,MatToolbarModule} from  '@angular/material';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isSideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggleHamburger() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

}
