import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SsfService } from '../ssf-service.service';
import { Login } from 'src/model/login';

@Component({
  selector: 'app-claim-insurance-farmer',
  templateUrl: './claim-insurance-farmer.component.html',
  styleUrls: ['./claim-insurance-farmer.component.css']
})
export class ClaimInsuranceFarmerComponent implements OnInit {

  constructor(private ssfService: SsfService, private router: Router) { }

  loaderc: boolean = false;
  ngOnInit(): void {
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
      this.loaderc=false;
    }

  }
  msg: string;
  name:string;
  pno:any;
  cause:any;
  dateLoss:any;
  public claimInsurance(policyno: string, date: string, cause: string) {
    window.scroll(0, 150);
    this.loaderc = true;
    this.ssfService.claimInsurance(parseInt(policyno), cause, date.toString()).subscribe(
      data => {
        console.log(data);
        if (data == 1) {
          this.msg = "your claim request for policy no " + policyno + " is accepted.";
          this.loaderc = false;
          window.scroll(0,0);
        }
        else if (data == 2) {
          this.msg = "please enter date before today's date";
          this.loaderc=false;
          window.scroll(0,0);
        }
        else if(data == 3) {
          this.msg = "your sell request is marked as sold. you cannot claim";
          this.loaderc=false;
          window.scroll(0,0);
        }
        else if(data==4)
        {
          this.msg = "you have already claimed for this policy No.";
          this.loaderc=false;
          window.scroll(0,0);
        }
        else if(data==5)
        {
          this.msg = "Please enter valid Policy No!";
          this.loaderc=false;
          window.scroll(0,0);
        }
        else if(data==0)
        {
          this.msg = "you insurance is not approved";
          this.loaderc=false;
          window.scroll(0,0);
        }
        this.clearForm();
      }
    );
    //this.router.navigate(['/claim']);
  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));

  }
  public clearForm() {
    (<HTMLFormElement>document.getElementById("claim")).reset();
  }

}
