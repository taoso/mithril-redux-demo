import { createStore } from 'redux'
import HelloApp from './reducers.js'

let store = createStore(HelloApp)

export default store
