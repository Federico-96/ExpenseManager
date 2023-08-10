export class CashIn {
	amount: number;
	residue: number;
	startDate: Date;
	note: null | string;
	endDate?: Date;
	constructor(
		amount: number,
		residue: number,
		startDate: Date,
		note: null | string,
		endDate?: Date
	) {
		this.amount = amount;
		this.residue = residue;
		this.startDate = startDate;
		this.note = note;
		this.endDate = endDate;
	}
}

export class EntityCashIn extends CashIn {
    ID: string;
    constructor(
        amount: number,
		residue: number,
        startDate: Date,
        note: null | string,
        id: string,
		endDate?: Date) {
        super(amount, residue, startDate, note, endDate);
        this.ID = id;
    }
}