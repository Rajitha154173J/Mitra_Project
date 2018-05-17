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
export class AuthService {

    token=localStorage.getItem('token');

  user: any;

  private headers:Headers = new Headers();

  options: RequestOptions



  constructor(private http:Http) {
      this.configHeaders();

      this.headers = new Headers({ 'Content-Type': 'application/json', 
      'Accept': 'q=0.8;application/json;q=0.9' });
this.options = new RequestOptions({ headers: this.headers });

  }



  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization',this.token);

  }
  getprojects() {
    return this.http.get("http://localhost:8000/api/users")            //correct
      .map((response: Response) => <any>response.json())
  }



  getUserDetails(){
    return this.http.get("../../assets/projects/users.json")
    .map((response: Response ) =><any>response.json())
  }


  getAllocatedEmployees() {
    return this.http.get("../../assets/projects/projects.json")            
      .map((response: Response) => <any>response.json())
  }


  getAllocatedEmployeesBackend() {

    let headers = new Headers();
    headers.append('Accept','application/json');
    headers.append('Content-type', 'application/json');
    headers.append('Authorization','Bearer '+this.token);

    return this.http.get("http://localhost:8000/api/users",{headers:headers})            
      .map((response: Response) => <any>response.json())
  }

// ************************************************************************************************************
  createService(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
        .post(url, body, this.options)
        //.map(this.extractData)
        .map((response: Response) => <any>response.json())
        .catch(this.handleError);
    }   

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private configHeaders() {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Cache-Control", "no-cache");
        this.headers.append("Pragma", "no-cache");
    }

//*****************************************************************************************************************

}
