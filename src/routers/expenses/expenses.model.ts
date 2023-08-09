export class Expenses {
    type: string;
    amount: number;
    date: Date;
    cashInID: string;
    note?: null | string;
    destination?: string;
    constructor(
        type: string,
        amount: number,
        date: Date,
        cashInID: string,
        note: null | string,
        destination: string
    ) {
        this.type = type;
        this.amount = amount;
        this.date = date;
        this.cashInID = cashInID;
        this.note = note;
        this.destination = destination;
    }
}

export class EntityExpenses extends Expenses {
    ID: string;
    constructor(type: string,
        amount: number,
        date: Date,
        cashInID: string,
        note: null | string,
        destination: string,
        id: string) {
        super(type, amount, date, cashInID, note, destination);
        this.ID = id;
    }
}