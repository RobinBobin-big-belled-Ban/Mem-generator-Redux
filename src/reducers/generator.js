import { CHANGE_HANDLER } from '../actions/changeGeneratorActon'
import { CLICK_HANDLER } from '../actions/clickGeneratorAction'


const initialState = {
	topText: "",
	bottomText: "",
	randomImg: "http://i.imgflip.com/1bij.jpg",
}

export function generatorReducer(state = initialState, action) {
	switch(action.type) {
		case CHANGE_HANDLER: 
			return {...state, [action.name]: action.value,}
		case CLICK_HANDLER:
			return {...state, topText: "", bottomText: "", randomImg: action.img_url,}
		default:
			return state
	}
}