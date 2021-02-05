import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.css']
})
export class AdminWelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail')==null)
      {
      this.router.navigate(['/loginlink']);
        }
  }
  public removeSession()
  {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));
    
  }

}
