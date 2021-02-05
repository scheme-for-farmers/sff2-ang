import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-admin-approve-bid',
  templateUrl: './admin-approve-bid.component.html',
  styleUrls: ['./admin-approve-bid.component.css']
})
export class AdminApproveBidComponent implements OnInit {
  showTable: boolean = true;
  msg: string = "";
  loaderc: boolean = false;
 

  ngOnInit(): void {
    this.loaderc = false;
    this.viewPendingBids();
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail')==null)
      {
      this.router.navigate(['/loginlink']);
        }
  }
  public bids: any = [];
  // approvedBidder: Bidder;
  // public email: string;
  constructor(private ssfService: SsfService,private router: Router) { }
 
  public viewPendingBids() {
    this.ssfService.viewUnapprovedBids().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.bids = data;
      }
    );
  }
  public approveBid(id: number) {
    this.loaderc = true;
    window.scroll(0, 0);
    this.ssfService.approveBid(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.ngOnInit();


        if (this.bids?.length == 0) {

          this.showTable = false;
          this.msg = "No pending approvals";

        }
 
      }
    );
  }
  public removeSession()
  {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));
    
  }
}
