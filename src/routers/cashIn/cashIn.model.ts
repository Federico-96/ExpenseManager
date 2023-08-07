export class CashIn {
    // ID: string;
    amount: number;
    startDate: Date;
    endDate?: Date;
    constructor(
        // ID: string,
        amount: number,
        startDate: Date,
        endDate?: Date
    ) {
        // this.ID = ID
        this.amount = amount
        this.startDate = startDate
        this.endDate = endDate
    }
}