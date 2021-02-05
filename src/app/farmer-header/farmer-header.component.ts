import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-header',
  templateUrl: './farmer-header.component.html',
  styleUrls: ['./farmer-header.component.css']
})
export class FarmerHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    console.log(sessionStorage.getItem('farmerEmail'));
    sessionStorage.removeItem('requestId');
  }
  public removeRequestId()
  {
    console.log(sessionStorage.removeItem('requestId'));
    sessionStorage.removeItem('requestId');
    console.log(sessionStorage.removeItem('requestId'));
  }

}
