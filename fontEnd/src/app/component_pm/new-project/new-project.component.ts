import { Component, OnInit } from '@angular/core';
import { CapMangService } from '../../service/cap-mang.service';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { IMyDpOptions } from 'mydatepicker';
import * as alertify from 'alertify.js';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  token = localStorage.getItem('token');
  // projectId: string;
  // projectType:string;
  name: string;
  // accName:string;
  noOfPhase;
  //  NoRm:number;
  // NoArchi:number;
  // NoDevelopers:number;
  //  NoQA:number;
  receiveDate;
  // times:Time;
  submissionDate;
  description: string;


  constructor(
    private router:Router,
    private capmangservice: CapMangService
  ) { }


  ngOnInit() {
    this.receiveDate = "2012-01-10",
      this.submissionDate = "2012-01-10"
  }


  createProject(value) {
    console.log('fghgyh', value)

    let projects = {

      // "id": 1,
      // "name": "projectx",
      // "submission_date": "2018-01-10",
      // "received_date": "2017-08-15",
      // "noOfPhase": 2,
      // "status": 0,
      // "description": "important project",
      // "account_id": 2,
      // "created_at": null,
      // "updated_at": null,
      // "pivot": {
      //     "user_id": 5,
      //     "project_id": 1

      name: value.name,
      noOfPhase: value.noPhase,
      submission_date: this.submissionDate,
      received_date: this.receiveDate,
      description: value.description,
      // NoOfDev: value.NoDevelopers,
      NoOfDev: value.NoDevelopers,
      NoOfQA: value.NoQA,
      NoOfArchi: value.NoArchi,
      NoOfBA: value.NoBA
    }
    console.log(value)

    if (!value.name) {
      alertify.error('name required')
    }
    if (!value.noPhase) {
      alertify.error('No of phases required')
    }
    if(!this.submissionDate){
      alertify.error('Submission date required')
    }
    if(!this.receiveDate){
      alertify.error('Received date required')
    }
  
  if(!value.description){
    alertify.error('Description required')
  }
    
    this.capmangservice.createProject(projects).subscribe(res => {
      console.log('post ok', res);
      alertify.success('Project created Successfull...!!!')
      this.router.navigate(['/project/']);
    });

  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  getFormattedDate(myDatePickerObject: any): string {
    return myDatePickerObject.year + '-' + myDatePickerObject.month + '-' + myDatePickerObject.day;
  }
  getreceiveDate(receiveDate) {
    console.log('ttttttttttttttttttttt', receiveDate);
    this.receiveDate = this.getFormattedDate(receiveDate.date);
    console.log('receiveDate', this.receiveDate);
  }

  getsubmissionDate(submissionDate) {
    console.log('ttttttttt', submissionDate);
    this.submissionDate = this.getFormattedDate(submissionDate.date);
    console.log('submissionDate', this.submissionDate);
  }

}
