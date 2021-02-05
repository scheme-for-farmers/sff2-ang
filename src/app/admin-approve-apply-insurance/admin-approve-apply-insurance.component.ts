import { Component, OnInit } from '@angular/core';
import { InsuranceApproval } from 'src/model/InsuranceApproval';
import { SsfService } from '../ssf-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-approve-apply-insurance',
  templateUrl: './admin-approve-apply-insurance.component.html',
  styleUrls: ['./admin-approve-apply-insurance.component.css']
})
export class AdminApproveApplyInsuranceComponent implements OnInit {

  constructor(private router:Router,private ssfService:SsfService) { }
  showTable:boolean=true;
  msg:string;
  loaderc:boolean=false;
  msg1:string;
  flag:boolean=false;

  ngOnInit(): void {
    this.viewApprovals();
    this.msg="";
    this.msg1="";
    this.loaderc=false;
    window.scroll(0,0);
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }
  }
  insuranceApprovals:any=[];
  insuranceApproval=new InsuranceApproval();
  public viewApprovals()
  {
    this.ssfService.viewInsuranceApprovals().subscribe(
      data=>{
        console.log(data);
        this.insuranceApprovals=data;
        if(this.insuranceApprovals?.length==0)
        {
          this.showTable=false;
          this.msg="no pending approvals"
        }
      }
    );
  }
  reqid:any;
  public approveInsurance(policyNo: number,id:number)
  {
    this.reqid=id;
    this.loaderc=true;
    window.scroll(0,150);
    this.ssfService.approveInsurance(policyNo,id).subscribe(
      data=>{  this.loaderc=false;
        if(data==0)
        {
          this.flag=true;
          this.loaderc=false;
          window.scroll(0,0);
          this.msg1="Sell request with id "+ this.reqid +" is not approved yet.";
        }
        console.log(data);
        this.viewApprovals();
      }
    );
  }
  public rejectInsurance(policyNo: number)
  {
    this.loaderc=true;
    window.scroll(0,0);
    console.log(policyNo);
    this.ssfService.rejectInsurance(policyNo).subscribe(
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