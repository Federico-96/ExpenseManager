interface IAuthentication {
    email: string;
	password: string;
	returnSecureToken: boolean;
}

export class Authentication implements IAuthentication {
	email: string;
	password: string;
	returnSecureToken: boolean;
	constructor(
		email: string,
		password: string,
		returnSecureToken: boolean,
	) {
		this.email = email;
		this.password = password;
		this.returnSecureToken = returnSecureToken;
	}
}

