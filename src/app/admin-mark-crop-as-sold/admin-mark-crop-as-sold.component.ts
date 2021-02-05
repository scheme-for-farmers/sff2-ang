import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-admin-mark-crop-as-sold',
  templateUrl: './admin-mark-crop-as-sold.component.html',
  styleUrls: ['./admin-mark-crop-as-sold.component.css']
})
export class AdminMarkCropAsSoldComponent implements OnInit {
  loaderc: boolean = false;
  showTable: boolean = true;
  msg: string = "";
  constructor(private ssfService:SsfService,private router: Router) { }
  public displayBid: any = [];
  ngOnInit(): void {
    this.loaderc = false;
    this.displayBids();
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail')==null)
      {
      this.router.navigate(['/loginlink']);
        }
  }
  public displayBids(){
    this.ssfService.displayBids().subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.displayBid = data;
        if(this.displayBid?.length==0)

        {​​

          this.showTable=false;
          this.msg = "No crops to be sold";

        }

      }
    );
  }
  
  public sellCrops(id: number) {
    this.loaderc = true;
    window.scroll(0, 150);

    this.ssfService.sellCrop(id).subscribe(
      data=>{
        console.log("sold "+data);
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
