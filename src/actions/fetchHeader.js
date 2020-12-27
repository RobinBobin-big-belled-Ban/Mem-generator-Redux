export const FETCH_REQUEST = "header/FETCH_REQUEST"

export function onFetchRequest(dates) {
	return {
		type: "header/FETCH_REQUEST",
		dates,
	}
}