import { Component, OnInit } from '@angular/core';
import { CapMangService } from '../../service/cap-mang.service';
import * as alertify from 'alertify.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  token = localStorage.getItem('token');
  user: any;
  profile;
  id;
  constructor(
    private capmangservice: CapMangService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('details');
    this.capmangservice.getDetails().subscribe(res => {
      this.profile = res.data;
      console.log('ppppppp', this.profile);
      console.log('id', this.profile.id);
    });
  }

  updateUser(value) {
    console.log('update fun')

    let user = {
      //  id:this.profile.id,
      name: value.name,
      // dob:'2015-09-19',
      address: value.address,
      // enrolled_year:'1995-05-30',
      // email:'amilaa@gmail.com',
      skills: value.skill,
      contact: value.contact,
      // // role:'developer',
      // HR_rating: 15
    }
    console.log(user);
    console.log(this.profile.id);

    this.capmangservice.updateUser(user, this.profile.id).subscribe(res => {
      console.log('update ok', res);
      alertify.success('Updated Successfully...!!!')

    });

  }


  updatedContact(value) {
    console.log('update contact  fun')

    let user = {
      skills: value.skill,
      contact: value.contact
    }
    console.log(user);
    console.log(this.profile.id);

    this.capmangservice.updateUser(user, this.profile.id).subscribe(res => {
      console.log('update ok', res);
    });
    this.router.navigate(['/profile/']);
  }

}


