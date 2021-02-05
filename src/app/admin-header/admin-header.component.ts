import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));
    //sessionStorage.removeItem('requestId');
  }

}
