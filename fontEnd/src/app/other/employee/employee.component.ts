import { Component, OnInit } from '@angular/core';
import { CapMangService } from '../../service/cap-mang.service';
import{Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [CapMangService]
})
export class EmployeeComponent implements OnInit {

  employeeList=new Array();



  constructor(
    private _capService: CapMangService,
    private router:Router
  ) { }
  // employeelist = {
  //   id: this.id,
  //   name: this.name,
  //   // type:this.type,
  //   dob: this.dob,
  //   address: this.address,
  //   enrolledYear: this.enrolledYear
  //   //email:this.email
  // };


  ngOnInit() {
 
    this._capService.getEmployees().subscribe(res => {
      this.employeeList = res.data;
      console.log(this.employeeList);
      console.log(this.employeeList.length)
    });
  }
  getEmployeeDetails(id){
  //  console.log('okkkk',id);
    // this._capService.getEmployeeDetails(id).subscribe(res=>{
    //   console.log('resssssssss',res);
    // });
    this.router.navigate(['/employeeDetails/'+id]);
  }
  

}
