import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { CapMangService } from '../../service/cap-mang.service';
import * as alertify from 'alertify.js'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeList = [];
  selectedEmployee;
  id: number;
  name: string;
  type: string;
  dob: Date;
  address: string;
  skills;
  enrolled_year: Date;
  email: string;
  role;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private capmangservice: CapMangService
  ) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    //console.log('eeeeeeeeeee',id);
    this.capmangservice.getEmployees().subscribe(res => {
      this.employeeList = res.data;
      console.log('ddddddddddddddddd', this.employeeList);
      for (let i = 0; i < this.employeeList.length; i++) {
        if (this.employeeList[i].id == id) {
          this.selectedEmployee = this.employeeList[i];

          this.id = this.selectedEmployee.id;
          this.name = this.selectedEmployee.name;
          this.role = this.selectedEmployee.role;
          this.email = this.selectedEmployee.email;
          this.dob = this.selectedEmployee.dob;
          this.address = this.selectedEmployee.address;
          this.skills = this.selectedEmployee.skills;
          this.enrolled_year = this.selectedEmployee.enrolled_year;

          console.log('oooooooooookkkkkkk', this.selectedEmployee);
          console.log('ooookkkkkk', res);
        }
      }
    });

  }

  delete() {
    console.log('delete fun')
    this.capmangservice.deleteUser(this.id).subscribe(res => {
      console.log('delete ok', res);
      alertify.success('Deleted emploeyee..!!!')
      // alertify.confirm('Confirm Titlemmmm','Confirm Message', function(){ alertify.success('Ok') }
      //           , function(){ alertify.error('Cancel')});
      this.router.navigate(['/employee/']);
    });
  }

}

// export class employee{
//   id: number;
//   name: string;
//   type: string;
//   dob: Date;
//   address: string;
//   enrolledYear: Date;
//   email: string;
// }




