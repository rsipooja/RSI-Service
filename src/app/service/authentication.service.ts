import { Injectable } from '@angular/core';
import { SignInData } from 'src/app/model/signInData';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	private readonly testuser = new SignInData('pooja', 'pooja@123');
	isAuth = false;
    sessionValue: string = "";

    constructor(private route:ActivatedRoute, private router: Router) { }

    authenticate(signInData: SignInData):boolean {
    	if(this.chkUser(signInData)){
    		this.isAuth = true;
            this.sessionValue = sessionStorage.getItem("user_name");
            console.log(this.sessionValue);
            this.router.navigate(['/dashboard']);
    		return true;
    	}
    	this.isAuth = false;
    	return false;
    }
     
    private chkUser(signInData: SignInData):boolean{
    	return this.checkuser(signInData.getUser()) && this.checkpass(signInData.getPass()); 
    }

    private checkuser(user: string):boolean{
    	return user === this.testuser.getUser();
    }

    private checkpass(pass: string):boolean{
    	return pass === this.testuser.getPass();    
    }

    logout(){
        this.isAuth = true;
        this.router.navigate(['']);
    }
}
