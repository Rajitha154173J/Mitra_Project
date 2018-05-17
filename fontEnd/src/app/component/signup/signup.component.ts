import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { validateSignup } from '../../service/validateSignup';
import { Directive, ElementRef, HostListener, Input } from'@angular/core';
import {Router} from '@angular/router';
import {CapMangService} from '../../service/cap-mang.service';
import * as alertify from 'alertify.js'
//import {} from 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: String;
  lastname: String;
  userid: String;
  profilepic:object;
  email: String;
  password: String;
  token;

  constructor(
    private validatesignup: validateSignup,
    private auth:AuthService,
    private router:Router,
    private capmangservice:CapMangService
  ) { }

  ngOnInit() {
    this.generateToken()
   
  }

  registerData(value) {
    if (!value.firstname) {
      // console.log('fn');
      // alertify.delay(1000);
      // alertify.logPosition("bottom right");
      // alertify.success("message");
    }
    else if (!value.lastname) {
      console.log('ln');
      alertify.error('lastname required')
    }
    else if (!value.userid) {
      console.log('id');
      alertify.error('userid required')
    }
    else if (!value.email) {
      console.log('em');
      alertify.error('email required')
    }
    else if (!value.password) {
      console.log('ps');
      alertify.error('password required')
    }
    else {
      // const user ={
      //   firstname:this.firstname,
      //   lastname:this.lastname,
      //   userid :this.userid,
      //   profilepic:this.profilepic,
      //   email:this.email,
      //   password:this.password
      // };
      let user={
        name:this.firstname,
        dob:'2012-01-01',
        address:'test',
        enrolled_year:'2012-01-01',
        HR_rating:12,
        email:this.email,
        password:this.password
      }
      this.capmangservice.createUser(user).subscribe(res=>{
        console.log(res.json())

      });
    }

    //console.log(value.firstname);
  

  // registerData(){


  //registerUser(user).subcribe(res=>{
  //console.log(user);


  // Required Fields
  //  if(!this.validateSignup.validateSignup(user)){
  //   this.password = "";
  //   return false;
  // }

  // // Required Fields
  // if(!this.validateSignup.validateEmail(user.email)){
  //   this.email = "";
  //   this.password = "";
  //   return false;
  // }

//   registerData()
//   .registerUser(user).subscribe(data => {
//     if(data.success){
//       this.router.navigate(['/login']);
//     } else {
//       this.router.navigate(['/register']);
//     }

//   //  };
// });

  
}



registerUser(){
let user={
  name:'mmmmmmmm',
  dob:'2012-01-01',
  address:'test',
  enrolled_year:'2012-01-01',
  HR_rating:12,
  email:'tennmst@gmail.com',
  password:'uuijhuijhu'
}
  this.capmangservice.createUser(user).subscribe(res=>{
    console.log('post ok',res);
    
  });

}



delete(){
  this.capmangservice.deleteUser(7).subscribe(res=>{
    console.log('delete ok',res);
  });
}


updateUser(){
  let user={
    name:'ttttttttttttttttttttttttttttttttttttttttt',
    dob:'2012-01-01',
    address:'test',
    enrolled_year:'2012-01-01',
    HR_rating:12,
    email:'tesyyyyyyyyyyyyyyyyyyyyyyyyt@gmail.com',
    password:'testrrrrrrrrrrrrrrr'
  }
    this.capmangservice.updateProject(user).subscribe(res=>{
      console.log('update ok',res);
    });
  
  }

  updateProject(data){

  }


  generateToken(){
    let searchKey = {email: 'sithiraac@gmail.com' , password: '123123' ,'Content-Type':'application/json'}; 
    // console.log(4449994,this.email);
     //console.log(4449994,this.searchKey);
     this.auth
     .createService('http://localhost:8000/api/login', searchKey).subscribe((response)=>{
       console.log(response);
       this.token=response.data.token;
       localStorage.setItem('token',this.token);
     });
  }
}


  
