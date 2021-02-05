import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crop } from 'src/model/Crop';
import { MarketPlace } from 'src/model/MarketPlace';
import { SsfService } from '../ssf-service.service';
 
@Component({
  selector: 'app-viewmarketplace',
  templateUrl: './viewmarketplace.component.html',
  styleUrls: ['./viewmarketplace.component.css']
})
export class ViewmarketplaceComponent implements OnInit {
 
  constructor(private ssfService:SsfService,private router: Router) { }
  crop=new Crop();
  crops:any=[];
  flag:boolean=false;
  marketplace = new MarketPlace();
  showTable:boolean=true;
  showTable1:boolean=true;
  msg:string;
  msg1:string;
  ngOnInit(): void {
    this.showTable=false;
    this.showTable1=false;
    this.viewCrops();
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail')==null)
      {
      this.router.navigate(['/loginlink']);
        }
  }
  public viewMarketPlace(crop){
    this.ssfService.viewMarketPlace(crop.cropName,crop.cropType).subscribe(
      data=>{ 
              this.showTable=false;
        console.log("market "+data);
        this.marketplace=data;
        if(this.marketplace.previousBids?.length==0){
        this.msg="No Previous bids available for "+this.marketplace.cropName;  
      }
      else{
        this.msg="";
        this.showTable=true;
      }
        this.marketplace.cropName=crop.cropName;
        this.marketplace.cropType=crop.cropType;
        console.log(this.marketplace.cropName);
        console.log(this.marketplace.cropType);
      }
    );
  }
  public viewCrops() {
    
    this.ssfService.viewAllUnSoldCrops().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.crops = data;
        if(this.crops?.length==0)
        {
          this.showTable1=false;
          this.msg1="no crops for sale";
        }
        else{
          this.showTable1=true;
          this.msg1="";
        }
      }
    );
  
    }
    public removeSession()
    {
      sessionStorage.removeItem('farmerEmail');
      sessionStorage.removeItem('requestId');
      console.log(sessionStorage.getItem('farmerEmail'));
      
    }
}