import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../services/authenticationservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authenticationService: AuthenticationserviceService) { }
  public IsAuthenticated(){
    const currentUser = this.authenticationService.currentUserValue;               
        if (currentUser) {
             
            return true;
        }
  }
  public LogOff(){
    this.authenticationService.logout();
  }
  ngOnInit() {
  }

}
