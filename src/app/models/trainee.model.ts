import { Address } from './address.model';

export class Trainee {
    private id: string;
    private name: string;
    private date: Date;
    private grade: number;
    private subject: string;
    private email: string;
    private address: Address;

    constructor(id: string, name: string, date: Date, grade: number, subject: string, email: string, address: Address) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.grade = grade;
        this.subject = subject;
        this.email = email;
        this.address = address;
    }
}
