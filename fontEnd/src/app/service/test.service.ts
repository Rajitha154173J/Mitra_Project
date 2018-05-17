import { Injectable } from '@angular/core';
//import {Http,Headers,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

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
                                //func.....
@Injectable()
export class TestService {
    token=localStorage.getItem('token');
    tests:Array<any>;
    searchKey;
    constructor(private http: Http,private router: Router){
        // this.tests =[
        //     { age:54, name: 'amila'},
        //     { age:64, name: 'kasun'}
        // ];
    }

    gettest(){
        // return this.tests;
        return this.http.get("../../assets/projects/users.json")
        .map((response : Response) => <any>response.json())
        // .map(res => res.json().alocatedemployees);
    }


    ClickButton(){
        this.searchKey = {'Content-Type':'application/json'}; 
       // console.log(4449994,this.email);
        //console.log(4449994,this.searchKey);
       
        // this.createService('http://localhost:8000/api/login', this.searchKey).subscribe((response)=>{
        //   console.log(response);
        //   //console.log(111,this.role);
        //   //console.log(335555555555555555555555,this.token);
        // });
    }



    // createService(url: string, param: any): Observable<any> {
        // let body = JSON.stringify(param);
        // return this.http
            // .post(url, body, this.options)
            // .map(this.extractData)
            // .catch(this.handleError);
        // }  
}