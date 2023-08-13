export class CashIn {
	amount: number;
	residue: number;
	startDate: string; // date in string format YYYY-MM-DD
	note: null | string;
	active: boolean;
	endDate?: Date;
	constructor(
		amount: number,
		residue: number,
		startDate: string,
		note: null | string,
		active: boolean,
		endDate?: Date
	) {
		this.amount = amount;
		this.residue = residue;
		this.startDate = startDate;
		this.note = note;
		this.active = active;
		this.endDate = endDate;
	}
}

export class EntityCashIn extends CashIn {
    ID: string;
    constructor(
        amount: number,
		residue: number,
        startDate: string,
        note: null | string,
		active: boolean,
        id: string,
		endDate?: Date) {
        super(amount, residue, startDate, note, active, endDate);
        this.ID = id;
    }
}