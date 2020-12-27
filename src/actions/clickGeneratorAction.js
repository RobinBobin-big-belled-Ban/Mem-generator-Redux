export const CLICK_HANDLER = 'generator/CLICK_HANDLER'

export function onClickHandler(img_url) {
	return {
		type: 'generator/CLICK_HANDLER',
		img_url,
	}
}