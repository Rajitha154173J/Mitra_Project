import { Component, OnInit } from '@angular/core';
import { NullAstVisitor } from '@angular/compiler';
import { TestService } from '../../service/test.service';     //func...service...
import {} from '../../service/auth.service';
import { tests } from './rmdash'

@Component({
  selector: 'app-rm-dash',
  templateUrl: './rm-dash.component.html',
  styleUrls: ['./rm-dash.component.css'],
  providers: [TestService]                     //func...
})



export class RmDashComponent implements OnInit {

  tests;
  auth;
  constructor( private _testService:TestService ) { }

  ngOnInit() {
    this._testService.gettest().subscribe(res=>{
      this.tests=res;
      console.log(this.tests);
    });
  }

}



