import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { SignInData } from '../model/signInData';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isvalidLogin = false;
  isvalidCred = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void { 
  }
  
  onSubmit(loginForm: NgForm){
    if(loginForm.valid){
      console.log("hii");
      this.isvalidLogin = true;
      this.isvalidCred = false;
    }
    else{
      this.checkUserCred(loginForm);
    }
  }
  private checkUserCred(loginForm: NgForm){
    const signInData = new SignInData(loginForm.value.username, loginForm.value.pass);
    if(!this.authenticationService.authenticate(signInData)){
      this.isvalidLogin = false;
      this.isvalidCred = true;
    }
      sessionStorage.setItem('user_name', loginForm.value.username);
  }
}
