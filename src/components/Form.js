import m from 'mithril'
import store from '../store.js'
import { incr, newTitle } from '../actions.js'

const Form = {
  view: (vnode) => m('div', [
    m('input', { oninput: m.withAttr('value', (v) => store.dispatch(newTitle(v))) }),
    m('button', { onclick: () => store.dispatch(incr()) }, vnode.attrs.count + ' clicks'),
  ])
}

export default Form
