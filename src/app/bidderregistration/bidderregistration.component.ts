import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bidder } from 'src/model/Bidder';
import { BidderAddress } from 'src/model/BidderAddress';
import { BidderBank } from 'src/model/BidderBank';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-bidderregistration',
  templateUrl: './bidderregistration.component.html',
  styleUrls: ['./bidderregistration.component.css']
})
export class BidderregistrationComponent implements OnInit {
  
  
  constructor(private ssfService:SsfService,private router: Router) { }
  bidder = new Bidder();
  bidderBank = new BidderBank();
  bidderAddress = new BidderAddress();
  flag:boolean=false;
  loaderc: boolean=false;
  public message:string="";
  confirmPassword:string;
  id:any;
  dummyPan:any;
  dummyAadhar:any;
  pancard:any;
  aadharCard:File;
  public registerBidder() {
    this.loaderc=true;
    window.scroll(0, 800);
    this.bidder.bidderAddress = this.bidderAddress;
    this.bidder.bidderBank = this.bidderBank;
    this.bidder.bidderName.trim();
    this.ssfService.registerBidder(this.bidder).subscribe(
      data => {
        this.id=data;
        this.function(this.id);
      }
    );
   


 }
 public function(id:number)
{
  if(id>0)
  {
   
    this.message="Registration successful id: "+id;
    this.loaderc=false;
    console.log("registration successful");
      this.clearForm();
      window.scroll(0, 0);
      this.upload();
  }
  else
  {
    this.loaderc=false;
    this.message="Registeration failed!!";
    console.log("Registeration failed!!");
    this.clearForm();
    console.log(this.message);
    window.scroll(0, 0);
  }
}

  ngOnInit(): void {
  }
  public clearForm() {
    (<HTMLFormElement>document.getElementById("bidder")).reset();
  }

  public onFileChange(event)
  {
    this.aadharCard=event.target.files[0];
  }
  public onFileChange1(event) {
    this.pancard=event.target.files[0];
  }

  
  public upload() {
    let formData: FormData=new FormData();
    formData.append("id",this.id);
    formData.append("aadharCard", this.aadharCard);
    formData.append("pancard", this.pancard);
    this.ssfService.uploadDocumentBidder(formData).subscribe(
      data => {
        console.log(data);
      }
    );
}

}
