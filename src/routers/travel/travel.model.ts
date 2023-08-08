export class travel {
    amount: number;
    date: Date;
    destination: string;
    constructor(
        amount: number,
        date: Date,
        destination: string,
    ) {
        this.amount = amount;
        this.date = date;
        this.destination = destination;
    }
}