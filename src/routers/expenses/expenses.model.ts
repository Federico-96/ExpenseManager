export class Expenses {
    type: String;
    amount: number;
    date: Date;
    cashInID: String;
    note?: null | String;
    destination?: String;
    constructor(
        type: String,
        amount: number,
        date: Date,
        cashInID: String,
        note: null | String,
        destination: String
    ) {
        this.type = type;
        this.amount = amount;
        this.date = date;
        this.cashInID = cashInID;
        this.note = note;
        this.destination = destination;
    }
}