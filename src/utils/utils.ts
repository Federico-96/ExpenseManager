export default class UTILS {
	/**
	 * comment
	 * @param { any } entityObject 
	 * @return { any[] } 
	 */
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
