import { INCR, NEW_TITLE } from './actions.js'
import { combineReducers } from 'redux'

const initTitle = {
  class: 'title',
  text: 'Hello Mithril',
}

const counter = (state = {count:0}, action) => {
  switch (action.type) {
    case INCR:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}

const title = (state = initTitle, action) => {
  switch (action.type) {
    case NEW_TITLE:
      return {
        ...state,
        text: action.text,
      }
    default:
      return state;
  }
}

const HelloApp = combineReducers({
  counter,
  title,
})

export default HelloApp
