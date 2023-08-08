export default class UTILS {
	static trasfpormEntityToArray (entityObject: any): any[] {
		const arrayObject: any[] = [];
		for (const key in entityObject) {
			arrayObject.push({
				ID: key,
				...entityObject[key]
			});
		}
		return arrayObject;
	}
}
