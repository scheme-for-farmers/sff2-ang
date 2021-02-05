import { Component, OnInit } from '@angular/core';
import { AddUpdateInsuranceDto } from 'src/model/AddUpdateInsuranceDto';
import { Crop } from 'src/model/Crop';
import { SsfService } from '../ssf-service.service';
import { Router } from '@angular/router';
import { updateInsurance } from 'src/model/updateInsurance';

@Component({
  selector: 'app-admin-add-update-insurance',
  templateUrl: './admin-add-update-insurance.component.html',
  styleUrls: ['./admin-add-update-insurance.component.css']
})
export class AdminAddUpdateInsuranceComponent implements OnInit {
  insurance = new AddUpdateInsuranceDto();
  insuranceId: number;

  msg: string;
  msg1: string;
  showTable: boolean = true;
  constructor(private router:Router, private ssfService: SsfService) { }

  public add() {
    this.insurance.cropType=this.c.cropType;
    this.insurance.cropName=this.c.cropName;
    console.log(this.insurance);
    this.ssfService.addOrUpdateInsurance(this.insurance).subscribe((data) => {
      console.log(JSON.stringify(data));
      this.insuranceId = data;
      console.log(data);
      //this.showTable=true;
      if(data>0)
      {
        this.msg = "Insurance is added with id=" + data;
      }
      else
      {
          this.msg="";
      }
      
      this.msg1="";
      this.clearForm();
      this.ngOnInit();
    });
  }



  cropTypes: any = [];
  cropNames: any = [];
  c = new Crop();
  ngOnInit(): void {
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }
    this.viewCropTypes();
    this.viewInsurance();
    //this.showTable=false;
  }
  public viewCropTypes() {
    this.ssfService.getCropTypes().subscribe((data) => {
      this.cropTypes = data;
    });
  }
  public viewCropName() {
    this.ssfService.getCropNamesByCropType(this.c.cropType).subscribe((data) => {
      this.cropNames = data;
      console.log("crop type changed" + " " + this.c.cropType + " " + this.c.cropName);
    });

  }
  public clearForm() {
    (<HTMLFormElement>document.getElementById("insurance")).reset();
    window.location.reload();
  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));

  }
  insuranceList:any=[];
  updateInsuranceObj=new updateInsurance();
  public viewInsurance()
  {
    console.log("hi");
    this.ssfService.viewAllInsurance().subscribe(
      data=>{
        this.insuranceList=data;
        console.log(data);
        console.log(this.insuranceList?.length);
        if (this.insuranceList?.length == 0) {
          this.showTable = false;
        }
        else{
          this.showTable=true;
        }
      }
    );
  }
  public updateInsurance(list:any,pamt:any,sumamt:any)
  {
    console.log(pamt+" "+sumamt);
    this.updateInsuranceObj.crop=list.crop;
    this.updateInsuranceObj.insuranceId=list.insuranceId;
    this.updateInsuranceObj.insuranceCompanyName=list.insuranceCompanyName;
    this.updateInsuranceObj.premiumAmount=pamt;
    this.updateInsuranceObj.sumInsuredPerHectare=sumamt;
    console.log("hi"+this.updateInsuranceObj.insuranceId);
    console.log(this.updateInsuranceObj.crop.cropName);
    console.log(this.updateInsuranceObj.premiumAmount);
    this.ssfService.updateInsuranceMethod(this.updateInsuranceObj).subscribe(
      data=>
      {
        console.log(data);
        this.msg = "Insurance is updated with insuranceId=" + data;
        this.msg1 = "";
        this.ngOnInit();
      }
      
    );
    
  }
}
