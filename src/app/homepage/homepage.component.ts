import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public auth: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
    if(!this.auth.trenutniKorisnik){
      this.router.navigate(['/login']);
    }
  }

  //u gornjem desnom cosku kliknite na ikonicu korisnika za odjavu
  public odjava(){
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/login']);
    })
  }
}
