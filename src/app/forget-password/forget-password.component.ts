import { Component, OnInit } from '@angular/core';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  loaderc: boolean = false;

  constructor(private ssfService: SsfService) { }

  email: string;
  flag: boolean = false;
  msg: string = "";

  public findAccount() {
    this.loaderc=true;
    window.scroll(0,0);
    this.ssfService.forgotPassword(this.email).subscribe(
      data => {

        console.log(JSON.stringify(data));
        this.flag = true;
        if(data==0)
        {
          this.msg = "Not registered ";
        }
        else
        {
          this.msg = "Password Successfully Sent to  " + this.email;
        }
        
        console.log(this.msg);
        this.ngOnInit();
      }
    );
    this.clearForm();
  }
  ngOnInit(): void {
    this.loaderc = false;
  }
  public clearForm() {
    (<HTMLFormElement>document.getElementById("pwd")).reset();
  }

}
