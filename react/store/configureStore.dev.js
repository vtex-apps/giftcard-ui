import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = composeWithDevTools(
  applyMiddleware(thunk),
  applyMiddleware(logger),
)(createStore)

const configureStore = initialState =>
  finalCreateStore(rootReducer, initialState)

export default configureStore
