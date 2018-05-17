import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { SignupComponent } from '../signup/signup.component';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './users';
import { Router } from '@angular/router';
import { CapMangService } from '../../service/cap-mang.service';
import { ActivatedRoute } from '@angular/router';
import * as alertify from 'alertify.js';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  token = localStorage.getItem('token');
  role = localStorage.getItem('role');
  users: User[];
  user: User;
  profile;
  id;
  name;
  createService;
  searchKey;
  deadline = Array();
  eid;

  constructor(
    private auth: AuthService,
    private httpService: AuthService,
    private capmangservice: CapMangService,
    private userService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: Http) { }

  ngOnInit() {

    console.log('details');
    this.capmangservice.getDetails().subscribe(res => {
      this.profile = res.data;
      console.log('ppppppp', this.profile.id);
      console.log('role', res);
      this.eid = this.profile.id
    });



    // let id = this.route.snapshot.paramMap.get('id');



  }


  getdeadline(eid) {
    console.log('eeeeeeeeeee', eid);
    this.capmangservice.deadline(eid).subscribe(res => {
      this.deadline = res.message;
      console.log('ddddddddddddddddd', this.deadline);

      console.log('name', this.deadline)

      for (let x = 0; x < this.deadline.length; x++) {
        console.log('sssssss', this.deadline[x]);
        let data = this.deadline[x].date;
        //  this.date.push(data); 
      
        
        if (!this.deadline[x].date) {
          alertify.error('You no have assigned projects');
        } else {
           alertify.error(this.deadline[x].date);
        }
     }
    });
  }



  goeditProfile(id) {
    id = this.profile.id;
    this.router.navigate(['/edit-profile/' + id]);

  }


  // changePassword(password) {
  //   console.log('details');
  //   this.capmangservice.changePassword(password).subscribe(res => {
  //     this.profile = res.data;
  //     console.log('ppppppp', this.profile);
  //   });

  // }
}