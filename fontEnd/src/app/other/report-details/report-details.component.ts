import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  alocationEmployees;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getAllocatedEmployees().subscribe(res => {
      this.alocationEmployees = res;
      console.log('dddddddd',this.alocationEmployees);
    });
    
  }

}
