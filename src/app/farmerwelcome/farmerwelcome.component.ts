import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerwelcome',
  templateUrl: './farmerwelcome.component.html',
  styleUrls: ['./farmerwelcome.component.css']
})
export class FarmerwelcomeComponent implements OnInit {

  constructor(private router: Router) { }
  mail:any;
  ngOnInit(): void {
    
    console.log(sessionStorage.getItem('farmerEmail'));
    this.mail=sessionStorage.getItem('farmerEmail');
    if (sessionStorage.getItem('farmerEmail')==null)
      {
      this.router.navigate(['/loginlink']);
      }
  }
  
  public removeSession()
  {
    sessionStorage.removeItem('farmerEmail');
    sessionStorage.removeItem('requestId');
    console.log(sessionStorage.getItem('farmerEmail'));
    
  }

}
