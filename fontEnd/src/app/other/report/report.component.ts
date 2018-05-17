import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  projects;
  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    
    // this.auth.getprojects().subscribe(res=>{
    //   this.projects=res;
    //  // console.log(res);
    // });
  }
  getReportDetails(pro){
  //  console.log(pro);

    this.router.navigate(['/report-details/'+pro.id]);
  }


 
   }


