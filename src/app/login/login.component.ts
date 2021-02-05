import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { SsfService } from '../ssf-service.service';
import { Login } from 'src/model/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  login1 = new Login();
  email:string="";
  password:string="";
  public msg: number = 0;
  public check: boolean = false;
  public message:string="";
  public msg1:string="";
  constructor(private router: Router, private ssfService: SsfService) {}
 
  public login() {
    this.ssfService.login(this.email,this.password).subscribe((data) => {
    this.msg = data;
    console.log(this.msg);
    this.check = true;
    sessionStorage.setItem('farmerEmail',this.email);
    this.redirectUser(this.msg);
    this.clearForm();

  });
}
  public redirectUser(msg:number)
  {
      if (this.msg == 1 && sessionStorage.getItem('farmerEmail')!=null ) {
        
        this.router.navigate(['/farmerWelcomePage']);
      } else if (this.msg == 12) {
        // alert("Your farmer registration approval is pending");
        this.msg1="Your farmer registration approval is pending";
        this.router.navigate(['/loginlink'])
      } else if (this.msg == 2 && sessionStorage.getItem('farmerEmail')!=null) {
        //sessionStorage.setItem('bidderEmail',this.email);
        this.router.navigate(['/bidderWelcomePage']);
      }
      else if(this.msg ==22)
      {
        // alert("your bidder registration approval is  pending");
        this.msg1="your bidder registration approval is  pending";
        this.router.navigate(['/loginlink'])
      }
      else if (this.msg ==3 && sessionStorage.getItem('farmerEmail')!=null) {
        this.router.navigate(['/adminWelcome']);
      } else {
        //sessionStorage.setItem('adminEmail',this.email);
        //this.message="Invalid credentials";
        // alert("invalid credentials");
        this.msg1="Invalid credentials";
        this.router.navigate(['/loginlink'])
 
      } 
    }
  public clearForm() {
    (<HTMLFormElement>document.getElementById("login")).reset();
  }
}
  
  


