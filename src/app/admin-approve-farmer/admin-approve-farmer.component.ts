import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from 'src/model/Farmer';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-admin-approve-farmer',
  templateUrl: './admin-approve-farmer.component.html',
  styleUrls: ['./admin-approve-farmer.component.css']
})
export class AdminApproveFarmerComponent implements OnInit {

 public farmers:any=[];
 approveFarmer:Farmer;
  public email: string = "";
  loaderc: boolean = false;
  showTable: boolean = true;
  msg: string = "";

  constructor(private ssfService:SsfService,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.loaderc = false;
  this.viewUnapprovedFarmer();
  console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail')==null)
      {
      this.router.navigate(['/loginlink']);
        }
        window.scroll(0,0);
        this.showImage=false;
  }
  viewUnapprovedFarmer(){
  this.ssfService.viewUnapprovedFarmer().subscribe(
   data=>{
     console.log(JSON.stringify(data));
      this.farmers = data;
      if(this.farmers?.length==0)

      {​​

        this.showTable=false;
        this.msg="No pending approvals"

      }
   }

  );
  }
  public approveFarmers(email2:string) { 
         this.email = email2;
    console.log(email2);
    this.loaderc=true;
    window.scroll(0,160);
         this.ssfService.approveFarmers(this.email).subscribe(
           data => {
             console.log(JSON.stringify(data));
           this.ngOnInit();
          
           }
         );

}
public rejectFarmer(email2: string) {
  this.email = email2;
  this.loaderc=true;
  window.scroll(0,160);
  // console.log(email2);
  this.ssfService.rejectFarmers(this.email).subscribe(
    data => {
      console.log(JSON.stringify(data));
      this.ngOnInit();
    
    }
  );
}
public removeSession()
  {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));
    
  }
  farmer2 =new Farmer();
  aadharPath:string;
  panPath:string;
  showImage:boolean=false;
  public download(id: number) {
    console.log(id);
    this.ssfService.downloadCardsFarmer(id).subscribe(
      data=>{
        this.showImage=true;
        console.log(JSON.stringify(data));
        this.farmer2= data;
        this.aadharPath = this.farmer2.farmerAadhar;
        console.log(this.aadharPath);
        this.panPath = this.farmer2.farmerPan;
      }
     );
}  
}