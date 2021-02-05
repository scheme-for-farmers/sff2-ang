import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { calculateInsurance } from 'src/model/calculateInsurance';
import { InsuranceInputDto } from 'src/model/InsuranceInputDto';
import { SsfService } from '../ssf-service.service';
 
@Component({
  selector: 'app-applyforpolicy',
  templateUrl: './applyforpolicy.component.html',
  styleUrls: ['./applyforpolicy.component.css']
})
export class ApplyforpolicyComponent implements OnInit {
 
  constructor(private router:Router, private ssfService:SsfService) { }
  insuranceInputDto=new InsuranceInputDto();
  calculateInsur =new calculateInsurance();
  showTable:boolean=false;
  loaderc:boolean=false;
 
 public  season:any;
 public  year:any;
 public crop:any;
  
  ngOnInit(): void {
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
      this.loaderc=false;
    }
    this.initialize();
    this.showTable=false;
  }
  requestId:any;
  msg:any;
  initialize()
  {
    this.requestId=sessionStorage.getItem('requestId');
    if(sessionStorage.getItem('requestId')!=null)
    {
      this.msg="your sell request is placed successfully";
    }
    
  }
  public calculateInsurance(area:any){
  // {this.loaderc = true;
    this.msg="";
    // window.scroll(0, 200);
    
    this.insuranceInputDto.requestId=this.requestId;
    this.insuranceInputDto.area=area;
    console.log(this.insuranceInputDto);
    if(sessionStorage.getItem('requestId')==null)
    {
      window.scroll(0, 0);
      this.msg="you have already applied insurance for this sell request";
      this.clearForm();
    }
    else
    {
    this.ssfService.calculateInsurance(this.insuranceInputDto).subscribe(
      data=>{
        this.calculateInsur=data;
        this.showTable=true;
        console.log(data);
        // this.loaderc = false;
        // window.scroll(0,0);
        this.clearForm();
      }
    );
    }
    //sessionStorage.removeItem('requestId');
  }
  id:any;
  flag:boolean=false;
  public applyInsurance()
  {
    this.showTable=false;//change
    this.loaderc = true;
    window.scroll(0, 150);
    if(sessionStorage.getItem('requestId')==null)
    {
      this.loaderc = false;
      window.scroll(0, 0);
      this.msg="you have already applied insurance for this sell request";
    }
    else{
    
    console.log(this.calculateInsur);
    this.ssfService.applyInsurance(this.calculateInsur).subscribe(
    data=>
    {
      this.loaderc=false;
      window.scroll(0,0);
      this.id=data;
      this.flag=true;
      this.msg="your policy number is "+data;
      sessionStorage.removeItem('requestId');
    }
    );
 
  }
  this.clearForm();
  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));
    sessionStorage.removeItem('requestId');
  }
  public clearForm() {
    (<HTMLFormElement>document.getElementById("apply")).reset();
  }
}