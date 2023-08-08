export class Fuel {
    amount: number;
    date: Date;
    cashInID: String;

    constructor(
        amount: number,
        date: Date,
        cashInID: String
    ) {
        this.amount = amount
        this.date = date
        this.cashInID = cashInID
    }
}
