import { Component, OnInit } from '@angular/core';
import { CapMangService } from '../../service/cap-mang.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import * as _ from 'lodash';
// import { type } from 'os';
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-assign-emp',
  templateUrl: './assign-emp.component.html',
  styleUrls: ['./assign-emp.component.css']
})
export class AssignEmpComponent implements OnInit {
  projects = Array();
  freeEmployeeList = Array();
  selectedProject;
  id;
  name = [];
  projectDetails;
  oneproject;
  emp;
  newAssign = Array();
  NoOfArchi;
  pid;
  freeQA;
  freeDev;
  dev;
  ba;
  freeQa;
  freeArchi;
  freeBa;

  constructor(
    private route: ActivatedRoute,
    private capmangservice: CapMangService,
    private router: Router,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.capmangservice.freeDev().subscribe(res => {
      this.freeDev = res.message;
      console.log('kkkkDev', this.freeDev);

      // this.capmangservice.freeQa().subscribe(res => {
      //   this.freeQA = res.message;
      //   console.log('kkkkkQAQA', this.freeQA);
      //   var x = _.toArray(res.message);


      //   _.forEach(x, function (value, key) {
      //   //key;
      //     // if (value) {
      //     //   // for (let i = 0; i < paymentList.length; i++){
      //     //   //     console.log('key is',key,'receipt_id',paymentList[i].receipt_id);
      //     //   //     if (paymentList[i].receipt_id == key){
      //     //   //         console.log('come333333');
      //     //   //         printingPamentObj.push(paymentList[i]);
      //     //   //         selectedReceiptId.push(key)
      //     //   //     }
      //     //   // }
      //     //   printingPamentObj.push(paymentList[key]);
      //     //   selectedReceiptId.push(paymentList[key].receipt_id);
      //   // }
      //     console.log(value, key);
      //   });
      // });





      id = this.route.snapshot.paramMap.get('id');
      console.log('eeeeeeeeeee', id);
      this.capmangservice.getOneProject(id).subscribe(res => {
        this.oneproject = res.data;
        console.log('ddddddddddddddddd', this.oneproject);

        console.log('name', res.data.id)
        this.pid = res.data.id;
        this.dev = res.data.NoOfDev;
        this.ba = res.data.NoOfBA;
        // console.log('pppppppid', pid);
      });


      this.capmangservice.getFreeEmpDetails().subscribe(res => {
        this.freeEmployeeList = res;
        console.log('freeee emp ', this.freeEmployeeList);

      });

    });

    /////////////////////////////////////////////////////////
    this.capmangservice.freeDev().subscribe(res => {
      this.freeDev = res.message;
      console.log('kkkkDev', this.freeDev);
    });



    this.capmangservice.freeQa().subscribe(res => {
      this.freeQa = res.message;
      console.log('kkkkQa', this.freeQa);
    });

    this.capmangservice.freeArchi().subscribe(res => {
      this.freeArchi = res.message;
      console.log('kkkArchii', this.freeArchi);
    });

    this.capmangservice.freeBa().subscribe(res => {
      this.freeBa = res.message;
      console.log('kkkkBaaa', this.freeBa);
    });


  }/////////ngoninit




  assignDev() {
    let emp = {
      id: this.pid,
      dev: this.dev
    }
    console.log('pppppppidfhjfgfjfjk', emp);

    this.capmangservice.assignDev(emp).subscribe(res => {
      console.log('assign ok', res);
      alertify.success('Assigned Successful..!!!');
      
    });
  }

  assignBA() {
    let emp = {
      id: this.pid,
      ba: this.ba
    }
    console.log('pppppppidfhjfgfjfjk', emp);

    this.capmangservice.assignDev(emp).subscribe(res => {
      console.log('assign ok', res);
      alertify.success('Developers assigned..!!!');

    });
  }


  clickbutton(id) {
    id = this.id;
    console.log('iddd', id);
    this.router.navigate(['/assignList/' + id]);
  }

  ////////////////////////////////////////////

  assignpost(id) {
    let emp = {
      project_id: this.pid,
      id
    }
    console.log('pppppppidfhjfgfjfjk', id, emp);

    this.capmangservice.assignEmployee(emp).subscribe(res => {
      console.log('assign ok', res);
      alertify.success('Assigned Successful....!!!');
      this.router.navigate(['/assignList/' + id]);
    });
  }



}





