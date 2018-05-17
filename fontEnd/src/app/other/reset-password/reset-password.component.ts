import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CapMangService } from '../../service/cap-mang.service';
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  value;
  Current_password;
  password = localStorage.getItem('password');

  constructor(
    private capmangservice: CapMangService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.password);

  }


  resetPassword(value) {
    if (!value.Current_password) {
      alertify.error('Current Password Required');
    }
    else if (!value.new_password) {
      alertify.error('New Password Required');
    }
    else if (!value.confirm_password) {
      alertify.error('Confirm Password Required');
    }
    else if ((value.Current_password == this.password) && (value.new_password == value.confirm_password)) {
      console.log("oookkk");
      let newPassword = {
        newpassword: value.new_password
      }

      this.capmangservice.resetPassword(newPassword).subscribe(res => {
        alertify.success('Saved success', )
      });
      console.log(newPassword);
      alertify.logPosition(" right");
      alertify.success('Password changed is successful..!!!')
      this.router.navigate(['/profile/']);
    }
    else {
      console.log("incorrect password");
      alertify.error('Invalid password');
    }
    
  }

}
