import { combineReducers } from 'redux'

import cardsReducer from './cards'

const rootReducer = combineReducers({
  cardsReducer,
})

export default rootReducer
