export class Client {
	_id?: number;
	firstName: string;
	lastName: string;
	dni: number;
	hc: number;
	address: string;
	age: number;
	sex: string;
	phone: number;
	hospitalOrigin: string;

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}
}