import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bidder } from 'src/model/Bidder';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-admin-approve-bidder',
  templateUrl: './admin-approve-bidder.component.html',
  styleUrls: ['./admin-approve-bidder.component.css']
})
export class AdminApproveBidderComponent implements OnInit {
  // viewUnapprovedBidders

  public bidders: any = [];
  approvedBidder: Bidder;
  public email: string;
  loaderc: boolean = false;
  showTable: boolean = true;
  msg: string = "";
  constructor(private ssfService: SsfService, private router: Router) { }

  public viewBidder() {

    this.ssfService.viewUnapprovedBidders().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.bidders = data;
        if (this.bidders?.length == 0) {

          this.showTable = false;
          this.msg = "No pending approvals";

        }



      }
    );

  }


  public approveBidder(email2: string) {
    this.email = email2;
    // console.log(email2);
    this.loaderc = true;
    window.scroll(0, 160);
    this.ssfService.approvedBidders(this.email).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.ngOnInit();

      }
    );
  }



  public rejectBidder(email2: string) {

    this.email = email2;
    this.loaderc = true;
    window.scroll(0, 160);
    // console.log(email2);
    this.ssfService.rejectBidders(this.email).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.ngOnInit();

      }
    );
  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));

  }

  ngOnInit(): void {
    this.loaderc = false;
    this.viewBidder();
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }
    window.scroll(0, 0);
    this.showImage=false;
  }
  bidder2 =new Bidder();
  aadharPath:string;
  panPath:string;
  showImage:boolean=false;
  public download(id: number) {
    console.log(id);
    this.ssfService.downloadCardsBidder(id).subscribe(
      data=>{
        this.showImage=true;
        console.log(JSON.stringify(data));
        this.bidder2= data;
        this.aadharPath = this.bidder2.bidderAadhar;
        console.log(this.aadharPath);
        this.panPath = this.bidder2.bidderPan;
      }
   
     ); 
} 

}