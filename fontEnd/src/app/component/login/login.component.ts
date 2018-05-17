import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import * as alertify from 'alertify.js'
import { ValueTransformer } from '@angular/compiler/src/util';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  keyDetails: string;                               //************* */
  searchKey: any;                                   //************* */
  loginKey: any;
  token;
  role;
  id;
  error;

  constructor(private httpService: AuthService,
    private router: Router
  ) {



    console.log(4444, this.searchKey);
    //this.searchKey = {email: 'sithiraac@gmail.com' , password: '123123','Content-Type':'application/json'};      //**** */
    //  this.loginKey={
    //        email: this.email ,
    //       password:this.password ,
    //      'content-type':'application/json'};
    //      console.log(4444,this.loginKey)
  }


  ngOnInit() {

  }

  test() {
    alertify.error('ghdsgh')
  }


  //******************************************* */

  ClickButton() {
    if (!this.email) {
      alertify.error('Email required');
    }
    if (!this.password) {
      //  console.log('ln');
      alertify.error('Password required');

    }
    this.searchKey = { email: this.email, password: this.password, 'Content-Type': 'application/json' };
    // console.log(4449994,this.email);
    //console.log(4449994,this.searchKey);
    this.httpService
      .createService('http://localhost:8000/api/login', this.searchKey).subscribe((response) => {
        console.log(response);
        /*if (response.message == 'unable to authenticate.') {
          console.log('unable to authenticate.', response.status);
        }*/

        this.role = response.role;
        this.token = response.data.token;
        if (this.role == 'admin') {
          this.router.navigate(['/admin']);
          console.log('admin');

        }
        else if (this.role == 'human-resource-manager') {
          this.router.navigate(['/alloc-emp']);
          console.log('HRM');
        }
        else if (this.role == 'resource-manager') {
          this.router.navigate(['/project']);
          console.log('RM');
        }
        else if (this.role == 'project-manager') {
          this.router.navigate(['/new-project']);
          console.log('PM');
        }
        else if (this.role == 'developer') {
          this.router.navigate(['/profile']);
          console.log('profile');
        }
        else if (this.role == 'architecture') {
          this.router.navigate(['/profile']);
          console.log('profile');
        }
        else if (this.role == 'quality-assurance') {
          this.router.navigate(['/profile']);
          console.log('profile');
        }
        else if (this.role == 'business-analyst') {
          this.router.navigate(['/profile']);
          console.log('profile');
        }
        else {
          alertify.error('Incorrect password')
        }
      

        //console.log(111,this.role);
        console.log(335555555555555555555555, this.token);
        localStorage.setItem('token', this.token);
        localStorage.setItem('id', this.id);
        localStorage.setItem('role', this.role);
        localStorage.setItem('password', this.password);
      },
      (error) => {
        alertify.error('Incorrect Email or password');
        console.log("error has occured");
      });


    /*.subscribe(
        result => 
 
        //this.role=result.role,  
        //this.token=result.data.token,
        // this.keyDetails = result.status,
         // console.log(result.role,111111,result.data.token),
          console.log(result),
         // console.log('key-'+result),
        error => console.log(error)

    ); */
  }

  //**************************************** */

  // loginPost(){
  //   this.httpService
  //   .createService('https://cmsmitra.azurewebsites.net/api/login',this.loginKey)
  //   .subscribe(
  //     result=>
  //     console.log('')
  //)
}

//}
