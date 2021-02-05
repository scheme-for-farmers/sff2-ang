import { Component, OnInit } from '@angular/core';
import { SsfService } from '../ssf-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-approve-claim-for-insurance',
  templateUrl: './admin-approve-claim-for-insurance.component.html',
  styleUrls: ['./admin-approve-claim-for-insurance.component.css']
})
export class AdminApproveClaimForInsuranceComponent implements OnInit {

  constructor(private router:Router, private ssfService:SsfService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }
    this.viewPendingClaimedInsurance();
    this.loaderc=false;
    window.scroll(0,0);
  }
  loaderc:boolean=false;
  list:any=[];
  msg:string;
  showTable:boolean=true;
  public viewPendingClaimedInsurance()
  {
    this.ssfService.fetchPendingClaimApprovals().subscribe(
      data=>{
        this.list=data;
        console.log(this.list);
        if(this.list?.length==0)
        {
          this.showTable=false;
          this.msg="no approvals pending";
        }
      }
    );
  }
  public approveClaim(policyNo:number)
  {
    this.loaderc=true;
    window.scroll(0,250);
    console.log(policyNo);
    this.ssfService.approveClaim(policyNo).subscribe(
      data=>{
        this.loaderc=false;
        window.scroll(0,0);
        console.log(data);
        this.ngOnInit();
      }
      
    );
    

  }
  public rejectClaim(policyNo)
  {
    this.loaderc=true;
    window.scroll(0,0);
    this.ssfService.rejectClaim(policyNo).subscribe(
      data=>{
        console.log(data);
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