import { Injectable } from '@angular/core';

@Injectable()
export class validateSignup {

  constructor() { }

  validateSignup(user){
    console.log(user);
    // if(user.firstname == undefined || user.lastname == undefined || user.userId == undefined || user.email == undefined || user.password == undefined){
    //   return false;
    // } else {
    //   return true;
    // }
  }
  
  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
