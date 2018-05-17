// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../service/auth.service';
// import { CapMangService } from '../../service/cap-mang.service';
// import * as alertify from 'alertify.js';
// import {IMyDpOptions} from 'mydatepicker';
// import {Router,ActivatedRoute} from '@angular/router';
// import { Time } from '@angular/common/src/i18n/locale_data_api';
// import {  FormGroup, FormBuilder,Validators,EmailValidator,NgForm } from '@angular/forms';


// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {
// //user:any;
 
//   user = {
//     name: '',
//     role:'',
//     address:'',
//     enrolled_year:'',
//     dob:'',
//     skills:'',
//     contact:'',
//     email:'',


//         HR_rating: 12,


//     };

//   token = localStorage.getItem('token');
//   // userid: number;
//    name: string;
//   // role:string;
//   dob;
//   // email: string;
//   // contact:string;
//   // skill:string;
//   // address:string;
//   enrolledyear;
//   // password: string;
//    id:number;


//   constructor(
//     private auth:AuthService,
//     private router:Router,
   
//     private capmangservice: CapMangService,
//     private aaa: AuthService,

//   ) { }

//   ngOnInit() {
//     this.dob="2012-01-10"
//   }
//   public myDatePickerOptions: IMyDpOptions = {
//     // other options...
//     dateFormat: 'yyyy-mm-dd',
// };

//    registerUser(value) {
//   // //  console.log('eeeeeeeeeee',value);

//   // this.router.navigate(['/admin/']);


//   //   //if (!value.firstname) {
//   //   // console.log('fn');
//   //   // alertify.delay(1000);
//   //   alertify.logPosition(" right");
//   //   // alertify.success("message");
//   //   //}
//   //   if (!value.name) {
//   //   //  console.log('ln');
//   //     alertify.error('Name required')
//   //    // alertify.alert('Alert Title', 'Name required!', function(){ alertify.success('Ok'); });

//   //    }
//   //   // else if (!value.userid) {
//   //   //   console.log('ln');
//   //   //   alertify.error('UserID required')
//   //   // }
//   //   else if (!value.role) {
//   //   //  console.log('id');
//   //     alertify.error('Role required')
//   //   }
//   //   else if (!value.email) {
//   //    // console.log('ekhkm');
//   //     alertify.error('email required')
//   //   }
//   //   // else if (!value.dob) {
//   //   //   console.log('eggm');
//   //   //   alertify.error('Date of Birth required')
//   //   // }
//  if (!this.user.address) {
//  console.log('idfd');
//      alertify.error('Address required')
//     }
  
    
//   //   else {
//       // let user = {
//       //   name:value.name,
//       //   dob:this.dob,
//       //   address:value.address,
//       //   enrolled_year:this.enrolledyear,
//       //   email:value.email,
//       //   skills:value.skill,
//       //   contact:value.contact,
//       //   role:value.role,
//       //   HR_rating: 12,
//       // }
//        console.log('user',this.user);
//       this.capmangservice.createUser(this.user).subscribe(res => {
//        // console.log('post ok', res);
//       //  alertify.set('notifier','position', 'bottom-right');
//       //  alertify.success('Current position : ' + alertify.get('notifier','position'));
//         alertify.success('Saved success...!!!',)
//         this.router.navigate(['/employee/']);
//         // $("#ajax").on("click", function () {
//         //   // reset();
      
//         //   alertify.confirm("Confirm?", function (e) {
//         //      if (e) {
//         //         alertify.alert("Successful AJAX after OK");
//         //      } else {
//         //         alertify.alert("Successful AJAX after Cancel");
//         //  }
//           //});
//        });


//      // });
     
      
//       // let user = {
//       //   // userid:value.userid,
//       //   name: value.name,
//       //   dob:'2000-01-01',
//       //   role:value.role,
//       //   address: value.address,
//       //   enrolled_year: '2000-01-01',
//       //   HR_rating: 12,
//       //   email: this.email,
//       //   contact:"value.contact",
//       //   skill:'java,c',
//       //   password: '123456789'
//       // }
//       // this.capmangservice.createUser(user).subscribe(res => {
//       //   console.log('post ok', res);
//       //   alertify.success('Saved success')
//       // });
//     }

//   //}
//   getFormattedDate(myDatePickerObject: any): string {
//     return myDatePickerObject.year + '-' + myDatePickerObject.month + '-' + myDatePickerObject.day;
//   }
//   getDOB(dob){
//   //  console.log('ttttttttttttttttttttt',dob);
//     this.user.dob=this.getFormattedDate(dob.date);
//    // console.log('dob',this.dob);
//   }
//   getEnrolledYear(enrolledyear){
//     this.user.enrolled_year=this.getFormattedDate(enrolledyear.date);
//   }

//   delete() {
//   //  console.log('delete')
//     this.capmangservice.deleteUser(this.id).subscribe(res => {
//     //  console.log('delete ok', res);
//       alertify.error('ashdfjhsjfhj');

//     });
//   }

//   validatefirstname() {
//     if (this.name.length < 6) {
//       alertify.error('please enter more than 6 charactor')
//     } else {
//       alertify.success('ok')
//     }

//   }


//   // updateUser(){
//   //   let user={
//   //     name:'ttttttttttttttttttttttttttttttttttttttttt',
//   //     dob:'2012-01-01',
//   //     address:'test',
//   //     enrolled_year:'2012-01-01',
//   //     HR_rating:12,
//   //     email:'tesyyyyyyyyyyyyyyyyyyyyyyyyt@gmail.com',
//   //     password:'testrrrrrrrrrrrrrrr'
//   //   }
//   //     this.capmangservice.updateProject(user).subscribe(res=>{
//   //       console.log('update ok',res);
//   //     });

//   //   }

// }



import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { CapMangService } from '../../service/cap-mang.service';
import * as alertify from 'alertify.js';
import {IMyDpOptions} from 'mydatepicker';
import {Router,ActivatedRoute} from '@angular/router';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import {  FormGroup, FormBuilder,Validators,EmailValidator,NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  
  token = localStorage.getItem('token');
  // userid: number;
   name: string;
  // role:string;
  dob;
  // email: string;
  // contact:string;
  // skill:string;
  // address:string;
  enrolledyear;
  // password: string;
   id:number;


  constructor(
    private auth:AuthService,
    private router:Router,
   
    private capmangservice: CapMangService,
    private aaa: AuthService,

  ) { }

  ngOnInit() {
    this.dob="2012-01-10"
  }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
};

  registerUser(value) {
  //  console.log('eeeeeeeeeee',value);

  this.router.navigate(['/admin/']);


    //if (!value.firstname) {
    // console.log('fn');
    // alertify.delay(1000);
    alertify.logPosition(" right");
    // alertify.success("message");
    //}
    if (!value.name) {
    //  console.log('ln');
      alertify.error('Name required')
     // alertify.alert('Alert Title', 'Name required!', function(){ alertify.success('Ok'); });

     }
    // else if (!value.userid) {
    //   console.log('ln');
    //   alertify.error('UserID required')
    // }
    else if (!value.role) {
    //  console.log('id');
      alertify.error('Role required')
    }
    else if (!value.email) {
     // console.log('ekhkm');
      alertify.error('email required')
    }
    // else if (!value.dob) {
    //   console.log('eggm');
    //   alertify.error('Date of Birth required')
    // }
    else if (!value.address) {
     // console.log('idfd');
      alertify.error('Address required')
    }
  
    
    else {
      let user = {
        name:value.name,
        dob:this.dob,
        address:value.address,
        enrolled_year:this.enrolledyear,
        email:value.email,
        skills:value.skill,
        contact:value.contact,
        role:value.role,
        HR_rating: 12,
      }
      // console.log('user',user);
      this.capmangservice.createUser(user).subscribe(res => {
       // console.log('post ok', res);
      //  alertify.set('notifier','position', 'bottom-right');
      //  alertify.success('Current position : ' + alertify.get('notifier','position'));
        alertify.success('Saved success...!!!',)
        this.router.navigate(['/employee/']);
        // $("#ajax").on("click", function () {
        //   // reset();
      
        //   alertify.confirm("Confirm?", function (e) {
        //      if (e) {
        //         alertify.alert("Successful AJAX after OK");
        //      } else {
        //         alertify.alert("Successful AJAX after Cancel");
        //  }
          //});
       });


     // });
     
      
      // let user = {
      //   // userid:value.userid,
      //   name: value.name,
      //   dob:'2000-01-01',
      //   role:value.role,
      //   address: value.address,
      //   enrolled_year: '2000-01-01',
      //   HR_rating: 12,
      //   email: this.email,
      //   contact:"value.contact",
      //   skill:'java,c',
      //   password: '123456789'
      // }
      // this.capmangservice.createUser(user).subscribe(res => {
      //   console.log('post ok', res);
      //   alertify.success('Saved success')
      // });
    }

  }
  getFormattedDate(myDatePickerObject: any): string {
    return myDatePickerObject.year + '-' + myDatePickerObject.month + '-' + myDatePickerObject.day;
  }
  getDOB(dob){
  //  console.log('ttttttttttttttttttttt',dob);
    this.dob=this.getFormattedDate(dob.date);
   // console.log('dob',this.dob);
  }
  getEnrolledYear(enrolledyear){
    this.enrolledyear=this.getFormattedDate(enrolledyear.date);
  }

  delete() {
  //  console.log('delete')
    this.capmangservice.deleteUser(this.id).subscribe(res => {
    //  console.log('delete ok', res);
      alertify.error('ashdfjhsjfhj');

    });
  }

  validatefirstname() {
    if (this.name.length < 6) {
      alertify.error('please enter more than 6 charactor')
    } else {
      alertify.success('ok')
    }

  }


  // updateUser(){
  //   let user={
  //     name:'ttttttttttttttttttttttttttttttttttttttttt',
  //     dob:'2012-01-01',
  //     address:'test',
  //     enrolled_year:'2012-01-01',
  //     HR_rating:12,
  //     email:'tesyyyyyyyyyyyyyyyyyyyyyyyyt@gmail.com',
  //     password:'testrrrrrrrrrrrrrrr'
  //   }
  //     this.capmangservice.updateProject(user).subscribe(res=>{
  //       console.log('update ok',res);
  //     });

  //   }

}
