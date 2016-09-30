export class CustomerClass {
	constructor(public username:string, public password:string, public email?:string, public mobileNumber ?: number){
		this.username = username;
		this.password = password;
		this.email = email;
		this.mobileNumber = mobileNumber;
	} 
}