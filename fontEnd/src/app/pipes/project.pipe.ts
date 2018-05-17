import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class ProjectPipe implements PipeTransform {

  transform(project: any, pname: any): any {
     // console.log('rrrr',project);
    //chek if any value undefined
    if(pname=== undefined) return project;
    //return updated array
    return project.filter(function(project){
      return project.name.toLowerCase().includes(pname.toLowerCase());
    })
  }

}