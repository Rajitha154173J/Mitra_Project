import { Component } from '@angular/core';
import alertify from 'alertify.js';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService) { }
  title = 'app';

}

 
  




