import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellRequestDto } from 'src/model/SellRequestDto';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-view-unsold-crops-of-farmer',
  templateUrl: './view-unsold-crops-of-farmer.component.html',
  styleUrls: ['./view-unsold-crops-of-farmer.component.css']
})
export class ViewUnsoldCropsOfFarmerComponent implements OnInit {

  constructor(private router: Router,private ssfService:SsfService) { }
  email:string;
  ngOnInit(): void {
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }
    this.viewUnsoldCropsOfFarmer();
  }
  sellRequestDto=new SellRequestDto();
  list:any=[];
  showTable:boolean=false;
  msg:string;
  public viewUnsoldCropsOfFarmer()
    {
      this.email=sessionStorage.getItem('farmerEmail');
      console.log("hi"+sessionStorage.getItem('farmerEmail'));
      this.ssfService.viewUnsoldCropsOfFarmer(sessionStorage.getItem('farmerEmail')).subscribe(
        data=>{
          this.list=data;
          console.log(data);
          if(this.list?.length==0)
          {
            this.showTable=false;
            this.msg="No sell requests or No unsold crops";
          }
          else
          {
            this.showTable=true;
            this.msg="";
          }
        }
      );
    }
    public removeSession() {
      sessionStorage.removeItem('farmerEmail');
      sessionStorage.removeItem('requestId');
      console.log(sessionStorage.getItem('farmerEmail'));
  
    }
}
