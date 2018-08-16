import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const finalCreateStore = compose(applyMiddleware(thunk))(createStore)

const configureStore = initialState =>
  finalCreateStore(rootReducer, initialState)

export default configureStore
