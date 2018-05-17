import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-rm',
  templateUrl: './sidebar-rm.component.html',
  styleUrls: ['./sidebar-rm.component.css']
})
export class SidebarRmComponent implements OnInit {

  constructor() { }
  requestNo:Number=5;
  reportNo:number=3;
  ngOnInit() {
  }

}
