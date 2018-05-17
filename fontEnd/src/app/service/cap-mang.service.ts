import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
 import 'rxjs/add/operator/map';


// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


// import { Response } from '_debugger';

@Injectable()
export class CapMangService {
    token=localStorage.getItem('token');
    private headers:Headers = new Headers();

    constructor(private http:Http) {
        this.token=localStorage.getItem('token');
        this.headers.append('Accept','application/json');
        this.headers.append('Content-type', 'application/json');
        this.headers.append('Authorization','Bearer '+this.token);
    }

    gettoken(){
        this.token=localStorage.getItem('token');
        this.headers.append('Accept','application/json');
        this.headers.append('Content-type', 'application/json');
        this.headers.append('Authorization','Bearer '+this.token);
    }

    getEmployees(){
        return this.http.get("http://localhost:8000/api/users",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }

    getEmployeeDetails(id){
        console.log('service',id);
        return this.http.get("http://localhost:8000/api/users/"+id,{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }

    createUser(user){
        console.log('create');
        return this.http.post('http://localhost:8000/api/users',user,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }

    updateProject(user){
        return this.http.patch('http://localhost:8000/api/users',user,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }
    deleteUser(id){
        console.log('iiiiiiiiiiiiii',id);
        return this.http.delete('http://localhost:8000/api/users/'+id,{headers:this.headers}).map(
            (response: Response) => <any>response.json() 
        );       

    }

    createProject(projects){
        console.log('create project');
        return this.http.post('http://localhost:8000/api/projects',projects,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }


    // updateUser(user){
    //     return this.http.patch('http://localhost:8000/api/users',user,{headers:this.headers}).map(
    //         (response: Response) => <any>response.json()
    //     );
    // }
    
    updateUser(user,id){
        return this.http.patch('http://localhost:8000/api/users/'+id,user,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }
    
    updatedContact(user,id){
        return this.http.patch('http://localhost:8000/api/updatedContact/'+id,user,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }

    getProjects(){
        return this.http.get("http://localhost:8000/api/projects/allproject",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }


    getDetails(){
        console.log('create');
        return this.http.post('http://localhost:8000/api/get-details','',{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }


    getFreeEmpDetails(){
        return this.http.get("http://localhost:8000/api/freeEmployeeDetail",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }


    getFreeEmployee(){
        return this.http.get("http://localhost:8000/api/freeEmployee",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }


    // getOneProject(){
    //     console.log('serviceget');
    //     return this.http.get("http://localhost:8000/api/projects/oneproject",{headers:this.headers})            
    //     .map((response: Response) => <any>response.json())
    // }

    getOneProject(id){
        console.log('one project func')
        return this.http.get("http://localhost:8000/api/projects/oneproject/"+id,{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }


    // changePassword(password){
    //     console.log('create');
    //     return this.http.post('http://localhost:8000/api/users',password,{headers:this.headers}).map(
    //         (response: Response) => <any>response.json()
    //     );
    // }

    resetPassword(newPassword){
        console.log('reset func');
        return this.http.post('http://localhost:8000/api/resetpassword',newPassword,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }

    deleteProject(id){
        console.log('iiiiiiiiiiiiii',id);
        return this.http.delete('http://localhost:8000/api/projects/'+id,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }



    assignEmployee(emp){
        console.log('create');
        return this.http.post('http://localhost:8000/api/assignEmp',emp,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }

    assignNewProject(){
        return this.http.get("http://localhost:8000/api/showRequest",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }
    

    
    assignArchi(emp){
        console.log('create');
        return this.http.post('http://localhost:8000/api/assignArchi','emp',{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }


    assignDev(emp){
        console.log('create',emp);
        return this.http.post('http://localhost:8000/api/assignDev','emp',{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }

    assignQa(emp){
        console.log('create');
        return this.http.post('http://localhost:8000/api/assignQa','emp',{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }
    assignBa(emp){
        console.log('create');
        return this.http.post('http://localhost:8000/api/assignBa','emp',{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }

    notification(){
        console.log('notif func');
        return this.http.get("http://localhost:8000/api/notifications",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }
    
    getMyProjects(){
        console.log('myproject');
        return this.http.get("http://localhost:8000/api/getprojects",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
       
    }



    freeQa(){
        console.log('free qa func')
        return this.http.get("http://localhost:8000/api/freeQa",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }

    freeDev(){
        return this.http.get("http://localhost:8000/api/freeDev",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }

    freeArchi(){
        return this.http.get("http://localhost:8000/api/freeArchi",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }

    freeBa(){
        return this.http.get("http://localhost:8000/api/freeBa",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }

    deadline(eid){
        console.log('one deadline func')
        return this.http.get("http://localhost:8000/api/showdeadline/"+eid,{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }


    removeEmployee(emp){
        console.log('create');
        return this.http.post('http://localhost:8000/api/removeEmployee',emp,{headers:this.headers}).map(
            (response: Response) => <any>response.json()
        );
    }


    projectEmployee(){
        return this.http.get("http://localhost:8000/api/projectEmployee",{headers:this.headers})            
        .map((response: Response) => <any>response.json())
    }


}