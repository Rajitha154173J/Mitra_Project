import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Project } from './project';
import { CapMangService } from '../../service/cap-mang.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  token = localStorage.getItem('token');
  role = localStorage.getItem('role');
 project: Project[];
//projects=new Array();
imagePath;


  constructor(
    private auth:AuthService,
    private router:Router,
    private _capService:CapMangService
  ) { }

  ngOnInit() {
    // this.imagePath='../../../assets/images/1.jpg';
    // this.auth.getprojects().subscribe(res=>{
    //   this.projects=res;
    //   console.log(this.projects);
    // });

    this._capService.getProjects().subscribe(res => {
      this.project = res.data;
      console.log('kkkkkkk',this.project);
    });
  }
  getprojects(project: Project){
  //  console.log(project);

  if(this.role=='resource-manager'){

    this.router.navigate(['/assign-emp/'+project.id]);
   }
   if(this.role=='project-manager'){

    this.router.navigate(['/project-details/'+project.id]);
   }
  }
}
