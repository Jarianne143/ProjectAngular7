import { Component } from '@angular/core';  
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular7';
  currentUser: any;

  // constructor(private http: HttpClient){}

  constructor( private router: Router, private authenticationService: AuthenticationService){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(){
    // let obs = this.http.get('https://api.github.com/users/koushikkothagal');
    // obs.subscribe((response) => console.log(response)); 
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
