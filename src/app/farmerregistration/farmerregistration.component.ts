import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/model/Farmer';
import { FarmerAddress } from 'src/model/FarmerAddress';
import { FarmerBank } from 'src/model/FarmerBank';
import { FarmerLand } from 'src/model/FarmerLand';
import { SsfService } from '../ssf-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerregistration',
  templateUrl: './farmerregistration.component.html',
  styleUrls: ['./farmerregistration.component.css'],
})
export class FarmerregistrationComponent implements OnInit {
  farmer=new Farmer();
  farmerAddress = new FarmerAddress();
  farmerLand = new FarmerLand();
  farmerBank = new FarmerBank();
  public message:string="";
  flag:boolean=false;
  dummyPan:any;
  dummyAadhar:any;
  
  id:any;
  pancard:any;
  aadharCard:File;
  loaderc: boolean=false;
  //email: string;
  confirmPassword:string;
  
  constructor(private router: Router,private ssfService:SsfService) {}

  public registerFarmer() {
    window.scroll(0, 800);
    this.loaderc = true;
    this.farmer.farmerAddress = this.farmerAddress;
      this.farmer.farmerLand = this.farmerLand;
      this.farmer.farmerBank = this.farmerBank;
      this.farmer.farmerBank.ifscCode=this.farmerBank.ifscCode;
      //console.log(this.farmer.farmerBank.ifscCode);
    this.ssfService.registerFarmer(this.farmer).subscribe(
      data => {
        this.id = data;
        console.log("hi"+this.id);
        this.flag=true;
        this.function(this.id);
      }
    );
}
public function(id:number)
{
  if(id>0)
  {   
    //this.uploadFile();
    this.message="Registration successful id: "+id;
    window.scroll(0,0);
    this.loaderc=false;
    console.log("registration successful");
    this.clearForm();
    this.upload();
  }
  else
  { 
    this.loaderc=false;
    this.message="Registeration failed!!";
    window.scroll(0,0);
    console.log("Registeration failed!!");
    this.router.navigate(['/fregistrartion']);
    console.log(this.message);
    this.clearForm();
  }
}

  ngOnInit(): void {}
  public clearForm() {
    (<HTMLFormElement>document.getElementById("farmer")).reset();
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
    this.ssfService.uploadDocument(formData).subscribe(
      data => {
        console.log(data);
      });

}
}
