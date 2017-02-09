import { createStore } from 'redux'
import HelloApp from './reducers.js'

let store = createStore(HelloApp)
window.s = store

export default store
