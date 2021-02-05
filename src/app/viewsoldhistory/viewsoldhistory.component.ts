import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoldHistory } from 'src/model/SoldHistory';
import { SsfService } from '../ssf-service.service';

@Component({
  selector: 'app-viewsoldhistory',
  templateUrl: './viewsoldhistory.component.html',
  styleUrls: ['./viewsoldhistory.component.css']
})
export class ViewsoldhistoryComponent implements OnInit {

  soldHistories: any = [];
  soldHistory = new SoldHistory();

  showTable: boolean = true;
  msg: string = "";
  constructor(private ssfService: SsfService, private router: Router) { }

  public viewSoldHistory() {
    this.ssfService.history(sessionStorage.getItem('farmerEmail')).subscribe(
      data => {
        console.log(sessionStorage.getItem('farmerEmail'));
        this.soldHistories = data;
        if (this.soldHistories?.length == 0) {

          this.showTable = false;
          this.msg = "Oops!! No crops sold. have you placed any sell request?if so you can claim insurance";

        }


      }
    )

  }
  ngOnInit(): void {
    this.viewSoldHistory();
    console.log(sessionStorage.getItem('farmerEmail'));
    if (sessionStorage.getItem('farmerEmail') == null) {
      this.router.navigate(['/loginlink']);
    }

  }
  public removeSession() {
    sessionStorage.removeItem('farmerEmail');
    sessionStorage.removeItem('requestId');
    console.log(sessionStorage.getItem('farmerEmail'));

  }

}
