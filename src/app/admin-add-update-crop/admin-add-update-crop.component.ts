import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crop } from 'src/model/Crop';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-admin-add-update-crop',
  templateUrl: './admin-add-update-crop.component.html',
  styleUrls: ['./admin-add-update-crop.component.css']
})
export class AdminAddUpdateCropComponent implements OnInit {

  public crop = new Crop;
  public crop2 = new Crop();
  crops: any = [];
  msg: string = "";
  msg1: string = "";
  cropid1: number;
  showTable: boolean = true;
  //amount:number;
  cropd2: number;
  public crop4 = new Crop();


  constructor(private ssfService: SsfService, private router: Router) { }

  public add() {
    this.ssfService.addOrUpdateCrops(this.crop).subscribe((data) => {
      console.log(JSON.stringify(data));
      this.cropid1 = data;
      this.msg = "Crop is added with cropid=" + data;
      this.msg1 = "";
      this.clearForm();
      this.ngOnInit();
      // this.crop=null;
    });
  }
  public clearForm() {
    (<HTMLFormElement>document.getElementById("addCrop")).reset();
  }

  public update(crop: Crop, amount: string) {
    this.crop4 = crop;
    this.crop4.basePrice = parseFloat(amount);
    this.ssfService.addOrUpdateCrops(this.crop4).subscribe((data) => {
      console.log(JSON.stringify(data));
      this.cropd2 = data;
      this.msg = "Crop is updated with cropid=" + data;
      this.msg1 = "";

      this.ngOnInit();
    });
  }

  public viewCrops() {

    this.ssfService.viewAllCrops().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.crops = data;
        console.log(this.crops?.length);
        if (this.crops?.length == 0) {
          this.showTable = false;
        }
      }
    );

  }

  public delete(crop3: Crop) {
    this.crop2 = crop3;
    this.ssfService.deleteCrop(this.crop2.cropId).subscribe(
      data => {
        this.msg1 = "Crop is deleted with cropid=" + data;
        console.log(JSON.stringify(data));
        this.crops = data;
        this.ngOnInit();
        this.msg = "";
      }
    );

  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));

  }

  ngOnInit(): void {
    this.viewCrops();

    console.log(sessionStorage.getItem('farmerEmail'));
    console.log(this.crops);
    console.log(this.showTable);
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }

    if (this.crops == null) {
      this.showTable = false;
    }
    else {
      this.showTable = true;
    }

  }


}
