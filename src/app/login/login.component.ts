import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { SignInData } from '../model/signInData';

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
    if(!loginForm.valid){
      this.isvalidLogin = true;
      this.isvalidCred = false;
      return;
    }
    this.checkUserCred(loginForm);
  }
  private checkUserCred(loginForm: NgForm){
    const signInData = new SignInData(loginForm.value.username, loginForm.value.pass);
    if(!this.authenticationService.authenticate(signInData)){
      this.isvalidLogin = false;
      this.isvalidCred = true;
    }
  }
}
