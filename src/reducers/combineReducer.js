import { combineReducers } from 'redux'
import { headerReducer } from './header'
import { generatorReducer } from './generator'

export const rootReducer = combineReducers({
	header: headerReducer,
	generator: generatorReducer,
})