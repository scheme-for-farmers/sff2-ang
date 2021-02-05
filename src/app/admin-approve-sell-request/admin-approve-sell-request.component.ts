import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SsfService } from '../ssf-service.service';


@Component({
  selector: 'app-admin-approve-sell-request',
  templateUrl: './admin-approve-sell-request.component.html',
  styleUrls: ['./admin-approve-sell-request.component.css']
})
export class AdminApproveSellRequestComponent implements OnInit {

  loaderc: boolean = false;
  showTable: boolean = true;
  msg: string = "";

  ngOnInit(): void {
    this.loaderc = false;
    this.viewPendingSellRequest();
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail')==null)
      {
      this.router.navigate(['/loginlink']);
        }
        window.scroll(0,0);
  }
  public sellRequest: any = [];
  // approvedBidder: Bidder;
  // public email: string;
  constructor(private ssfService:SsfService,private router: Router) { }
 
  public viewPendingSellRequest() {
    this.ssfService.viewUnapprovedSellRequest().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.sellRequest = data;
     
        if(this.sellRequest?.length==0)

        {​​

          this.showTable=false;
          this.msg = "No pending approvals for sell requests";

        }
     
     
      }
    );
}
  public approveSellRequest(id: number) { 
    this.loaderc=true;
    window.scroll(0,150);//180
  this.ssfService.approveSellRequest(id).subscribe(
    data => {
      console.log(JSON.stringify(data));
      this.ngOnInit();
    
    }
  );
}
 
  public rejectSellRequest(id: number) {
    this.loaderc=true;
    window.scroll(0,150);
  this.ssfService.rejectSellRequest(id).subscribe(
    data => {
      console.log(JSON.stringify(data));
      this.ngOnInit(); 
    }
  );
}
public removeSession()
{
  sessionStorage.removeItem('farmerEmail');
  console.log(sessionStorage.getItem('farmerEmail'));
  
}

}
