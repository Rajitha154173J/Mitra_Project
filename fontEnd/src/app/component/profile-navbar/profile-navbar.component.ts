import { Component, OnInit } from '@angular/core';
import { CapMangService } from '../../service/cap-mang.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.css']
})
export class ProfileNavbarComponent implements OnInit {
  note=Array();
  body=Array();
len;
  constructor(
    private capmangservice: CapMangService

  ) { }

  ngOnInit() {
    console.log('notiiiiiiiidetails');
    this.capmangservice.notification().subscribe(res => {
      this.note = res.data;
    //  console.log('nottttttt', this.note);
    //  console.log('nnnrole', res.data);
      for(let x=0;x<this.note.length;x++){
       // console.log('sssssss');
        let data=this.note[x].data.body;
        this.body.push(data);
      }
      this.len=this.note.length;
      console.log('dddddd',this.note.length,this.body);
    });
  }

}
