export class CashIn {
	amount: number;
	startDate: Date;
	endDate?: Date;
	constructor(
		amount: number,
		startDate: Date,
		endDate?: Date
	) {
		this.amount = amount;
		this.startDate = startDate;
		this.endDate = endDate;
	}
}