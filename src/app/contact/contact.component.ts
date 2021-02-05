import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../../model/user';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private ssfService: SsfService) { }
  User: user = new user();
  msg: string;
  loaderc: boolean=false;
  flag:boolean=false;

  doRegister(f: NgForm) {
    window.scroll(0, 20);
    this.loaderc = true;
    if (f.valid) {
      this.ssfService.contactUs(this.User).subscribe(
        data => {
          console.log(data);
          if (data > 0) {
            this.flag=true;
            this.loaderc=false;
            this.msg = "Thankyou For Contacting Us !!! Our Experts will Contact you Soon";
          }
        }
      );

    }
    else {
      // this.flag=true;
      this.loaderc=false;
      // alert("Please enter correct details.");
      this.msg = "Please enter correct details.";
    }
    this.clearForm();

  }
  public clearForm() {

    (<HTMLFormElement>document.getElementById("contact")).reset();
  }
  ngOnInit(): void {
  }

}
