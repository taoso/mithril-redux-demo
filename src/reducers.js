import { INCR } from './actions.js'

const initialState = {
  count: 0,
  title: {
    class: 'title',
    title: 'Hello Mithril',
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCR:
      var s = {
        ...state,
        count: state.count + 1,
      }
      return s
    default:
      return state;
  }
}
