import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../providers/api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  countries: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.displayData();
  }


  displayData() {
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 10 };
    this.apiservice.displayData().subscribe(
      response => {
          this.countries = response;
          this.dtTrigger.next();
          // console.log(response);
      },
      error => {
          console.log(error);
      }
    );
  }
}
