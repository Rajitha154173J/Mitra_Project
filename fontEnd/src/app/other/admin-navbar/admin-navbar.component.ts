import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import { CapMangService } from '../../service/cap-mang.service';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {


  profile;
  constructor(
    private capmangservice: CapMangService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('token');                 //remove token when logout
  }

  getDetails(){
    //  console.log('okkkk',id);
      // this._capService.getEmployeeDetails(id).subscribe(res=>{
      //   console.log('resssssssss',res);
      // });
      this.router.navigate(['/profile/']);
 
      console.log('details');
      this.capmangservice.getDetails().subscribe(res=>{
        this.profile=res.data;
        console.log('ppppppp',this.profile);
      });
    
  
}
}
