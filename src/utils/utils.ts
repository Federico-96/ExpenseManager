// import { EntityCashIn } from '../routers/cashIn/cashIn.model';
// import { EntityExpenses } from "../routers/expenses/expenses.model";
export default class UTILS {
	/**
	 * comment
	 * @param { any } entityObject
	 * @return { any[] }
	 */
	static trasfpormEntityToArray(entityObject: any): any[] {
		const arrayObject: any[] = [];
		for (const key in entityObject) {
			arrayObject.push({
				ID: key,
				...entityObject[key],
			});
		}
		return arrayObject;
	}

	static sumAttributeOfObj(entityObject: any[]): number {
		const total = entityObject.reduce((prev, cur) => {
			return (prev += cur.amount);
		}, 0);
		return total;
	}

	static getDateFormatted(dateParam: string | Date | number) {
		const dateToFormatted = new Date(dateParam);
		const day = dateToFormatted.getDate();
		let month: number | string = dateToFormatted.getMonth() + 1;
		const year = dateToFormatted.getFullYear();

		if (month < 10) {
			month = `0${month}`;
		}
		return `${year}-${month}-${day}`;
	}
}
