import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayRequest } from 'src/model/DisplayRequest';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-bidderwelcome',
  templateUrl: './bidderwelcome.component.html',
  styleUrls: ['./bidderwelcome.component.css']
})
export class BidderwelcomeComponent implements OnInit {

  constructor(private ssfService: SsfService, private router: Router) { }

  displayRequest = new DisplayRequest();
  requestList: any = [];
  bidAmount: any;
  msg: string;
  msg1: string;
  flag: boolean;
  msg2: string;
  showTable: boolean = true;
  loaderc: boolean = false;
  name: string = sessionStorage.getItem('farmerEmail');
  ngOnInit(): void {
    this.loaderc = false;
    this.viewSellRequests();
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }



  }
  public viewSellRequests() {
    this.ssfService.viewSellRequests().subscribe(
      data => {
        this.requestList = data;

        if (this.requestList?.length == 0) {

          this.showTable = false;
          this.msg2 = "No crops available for bidding";

        }

      }

    );
  }
  placeBid(sr: DisplayRequest, bidAmount: any) {
    this.loaderc = true;
    window.scroll(0, 150);

    this.displayRequest = sr;
    this.displayRequest.currentBidAmount = bidAmount;//bidAmount;
    this.displayRequest.bidderEmail = sessionStorage.getItem('farmerEmail');
    console.log(this.displayRequest.requestId);
    console.log(this.displayRequest.bidderEmail);
    console.log(this.displayRequest.cropName);
    console.log(this.displayRequest.cropType);
    console.log(this.displayRequest.currentBidAmount);
    this.ssfService.placeBid(this.displayRequest).subscribe(
      data => {
        console.log("placed" + data);
        this.flag = true;
        if (data > 0) {
          this.msg = "Your Bid request is placed with BidId " + data;
          this.msg1 = "";
        }
        else {
          this.msg1 = "Please enter amount greater than current Bid Amount";
          this.msg = "";
        }
        this.ngOnInit();
      }
    );
  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));

  }

}
