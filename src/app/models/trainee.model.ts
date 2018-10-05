export class Trainee {
    private id: string;
    private name: string;
    private date: Date;
    private grade: number;
    private subject: string;

    constructor(id: string, name: string, date: Date, grade: number, subject: string) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.grade = grade;
        this.subject = subject;
    }
}
