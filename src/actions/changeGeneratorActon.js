export const CHANGE_HANDLER = 'generator/CHANGE_HANDLER'

export function onChangeHandler(name, value) {
	return {
		type: 'generator/CHANGE_HANDLER',
		name,
		value,
	}
}

