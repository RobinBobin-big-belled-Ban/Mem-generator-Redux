import { FETCH_REQUEST } from '../actions/fetchHeader'

export const initialState = {
	header: {
		text: "Meme Generator", 
		url: "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",
		memes: []
	}
}

export function headerReducer(state = initialState.header, action) {
	switch(action.type) {
		case FETCH_REQUEST:
			return {...state, memes: action.dates}
		default:
			return state
	}
}

