import m from 'mithril'
import Title from './Title.js'

import store from '../store.js'

import { incr } from '../actions.js'

const Hello = {
  view: (vnode) => m('main', [
    m(Title, vnode.attrs.title),
    m('button', { onclick: () => store.dispatch(incr()) }, vnode.attrs.count + ' clicks'),
  ])
}

export default Hello
