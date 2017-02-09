import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import HelloApp from './reducers.js'

let store = createStore(HelloApp, applyMiddleware(thunk))

export default store
