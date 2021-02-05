import { Component, OnInit } from '@angular/core';
import { SsfService } from '../ssf-service.service';
import { Router } from '@angular/router';

import { Farmer } from 'src/model/Farmer';
import { SellRequest } from 'src/model/SellRequest';
import { Crop } from 'src/model/Crop';

@Component({
  selector: 'app-placesellrequest',
  templateUrl: './placesellrequest.component.html',
  styleUrls: ['./placesellrequest.component.css']
})
export class PlacesellrequestComponent implements OnInit {

  constructor(private router: Router, private ssfService: SsfService) { }
  sellRequest = new SellRequest();
  crop = new Crop();
  crops: any = [];
  checkedCrops: any = {}; //create empty object to store crop checkbox status for each crop
  msg: any;
  flag: boolean = false;
  opt: any;
  loaderc: boolean = false;
  farmerEmail = sessionStorage.getItem('farmerEmail');
  //quantity:any;

  ngOnInit(): void {
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }
    this.viewCrops();
    this.loaderc=false;
  }
  public insuranceApplied(opt: any) {
    this.checkedCrops[opt.cropName] = !this.checkedCrops[opt.cropName]; //toggle crop checkbox status of crop with given name

  }
  public placeSellRequest(crop2: Crop, quantity: string) {
    window.scroll(0,110);
    this.loaderc = true;
    this.sellRequest.cropName = crop2.cropName;
    this.sellRequest.cropType = crop2.cropType;
    this.sellRequest.quantity = parseFloat(quantity);
    this.sellRequest.farmerEmail = this.farmerEmail;
    this.ssfService.placeSellRequest(this.sellRequest).subscribe(
      data => {
        console.log("placed" + data);
        this.flag = true;
        this.redirect(data, crop2.cropName);
        console.log(this.insuranceApplied);
      }
    );
  }
  public redirect(data: any, cropName: string) {
    window.scroll(0,0);
    if (data > 0 && this.checkedCrops[cropName]) {
      this.loaderc = false;
      console.log("insurance");
      sessionStorage.setItem('requestId', data);
      this.router.navigate(['/applyforpolicy']);
      //this.router.navigate(['/farmerWelcomePage']);
    }
    else if (data > 0 && !this.checkedCrops[cropName]) {
      this.loaderc = false;
      this.msg = "Sell request placed with request id " + data;
      this.ngOnInit();
    }
    else {
      this.loaderc = false;
      this.msg = "Please Try after Sometime!!!";
      this.ngOnInit();
      // alert("please try after sometime");
      // this.ngOnInit();
      //this.router.navigate(['/sellrequest']);
      //this.router.navigate(['/farmerWelcomePage']);
    }
  }
  public viewCrops() {

    this.ssfService.viewAllCrops().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.crops = data;
        this.crops.forEach(temp => this.checkedCrops[temp.cropName] = false); //initialize all crop checkbox status to false

      }
    );

  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));
    sessionStorage.removeItem('requestId');
  }


}