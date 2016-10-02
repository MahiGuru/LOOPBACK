export class CustomerClass {
	constructor(
		public email:string, 
		public password:string, 
		public mobileNo ?:number, 
		public firstname?:string, 
		public lastName?: string){		
	} 
}