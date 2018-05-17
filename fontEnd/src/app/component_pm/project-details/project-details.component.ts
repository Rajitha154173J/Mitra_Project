import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import { CapMangService } from '../../service/cap-mang.service';
import * as alertify from 'alertify.js';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projects;
  selectedProject;

  constructor(
    private route: ActivatedRoute,
    private auth:AuthService,
    private router:Router,
    private capmangservice: CapMangService
  ) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    console.log('eeeeeeeeeee',id);
    this.capmangservice.getOneProject(id).subscribe(res => {
      this.projects = res.data;
       console.log('ddddddddddddddddd',this.projects);

       console.log('name',this.projects.name)
   
    });
  }

  delete(){
    console.log('delete fun')
    this.capmangservice.deleteProject(this.projects.id).subscribe(res=>{
      console.log('delete ok',res);
      this.router.navigate(['/project/']);
      alertify.error('Project deleted..!!!')
    });
  }

 


}


