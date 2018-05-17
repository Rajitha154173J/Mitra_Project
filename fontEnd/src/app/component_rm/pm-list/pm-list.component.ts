import { Component, OnInit } from '@angular/core';
import { CapMangService } from '../../service/cap-mang.service';
import{Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pm-list',
  templateUrl: './pm-list.component.html',
  styleUrls: ['./pm-list.component.css']
})
export class PmListComponent implements OnInit {

  emp = new Array();
  constructor(private _capService: CapMangService) {
    
  }

  ngOnInit() {
  
  this._capService.getEmployees().subscribe(res => {
    this.emp = res.data;
    console.log(this.emp);
 });
}
}
