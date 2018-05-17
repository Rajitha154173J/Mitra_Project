import { Component, OnInit } from '@angular/core';
import { CapMangService } from '../../service/cap-mang.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-assign-list',
  templateUrl: './assign-list.component.html',
  styleUrls: ['./assign-list.component.css']
})
export class AssignListComponent implements OnInit {
  freeDev=Array();
  freeQa=Array();
  projectEmployee=Array();
  id;

  constructor(
    private capmangservice: CapMangService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
      console.log('eeeeeeeeeee', id);

    this.capmangservice.freeDev().subscribe(res => {
      this.freeDev = res.message;
      console.log('kkkkDev', this.freeDev);
    });
  


  this.capmangservice.freeQa().subscribe(res => {
    this.freeQa = res.message;
    console.log('kkkkQa', this.freeQa);
  });

  this.capmangservice.projectEmployee().subscribe(res => {
    this.projectEmployee = res.message;
    console.log('kkkkpppprrr', this.projectEmployee);

  });

}


removeEmployee(id){
  let emp = {
 
    id
  }
  console.log('pppppppidfhjfgfjfjk', id, emp);

  this.capmangservice.removeEmployee(emp).subscribe(res => {
    console.log('assign ok', res);
    alertify.success('Removed Successful....!!!');
    // this.router.navigate(['/assignList/' + id]);
  });
}



}
