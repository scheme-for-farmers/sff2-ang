import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-header',
  templateUrl: './bidder-header.component.html',
  styleUrls: ['./bidder-header.component.css']
})
export class BidderHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));

  }
}
