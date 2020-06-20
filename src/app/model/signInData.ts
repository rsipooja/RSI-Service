export class SignInData {
	private user: string;
	private pass: string;

	constructor(user: string, pass:string) { 
		this.user = user;
		this.pass = pass;
	}

	getUser(): string{
		return this.user;
	}

	getPass(): string{
		return this.pass;
	}
}