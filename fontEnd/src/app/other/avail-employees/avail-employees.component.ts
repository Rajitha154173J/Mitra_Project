import { Component, OnInit } from '@angular/core';
import { CapMangService } from '../../service/cap-mang.service';
import{Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-avail-employees',
  templateUrl: './avail-employees.component.html',
  styleUrls: ['./avail-employees.component.css']
})
export class AvailEmployeesComponent implements OnInit {

  searchKey;
  role;
  id;
 user_id;
  name=new Array();
  emp = new Array();
  constructor(private _capService: CapMangService) {}
    
  ngOnInit() {
    //this.searchKey = { role: this.role ,'Content-Type': 'application/json' };
     
      
  
    
    console.log(4449994,this.name);
    if(this.user_id==6){
      this._capService.getEmployees().subscribe(res => {
        this.emp = res.data;
        console.log(this.emp);
console.log('aaa',this.user_id);
   });
   }
 
}
}
