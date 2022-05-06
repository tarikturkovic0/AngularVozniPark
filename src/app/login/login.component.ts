import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {AuthenticationService} from "../services/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  public prijava(forma : NgForm){
    if(!forma.valid){
      return;
    }
    else{
      this.authService.login(forma.value.email, forma.value.password).subscribe(() => {
        this.router.navigate(['/homepage']);
      })
    }
  }
}
