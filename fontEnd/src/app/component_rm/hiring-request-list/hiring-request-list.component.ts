import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-hiring-request-list',
  templateUrl: './hiring-request-list.component.html',
  styleUrls: ['./hiring-request-list.component.css']
})
export class HiringRequestListComponent implements OnInit {
 

  projects;
  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.auth.getprojects().subscribe(res=>{
      this.projects=res;
     // console.log(res);
    });
  }

  getDetails(pro){
    //  console.log(pro);
  
      this.router.navigate(['/project-details/'+pro.id]);
    }

}
