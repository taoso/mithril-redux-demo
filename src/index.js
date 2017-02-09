import './css/app.css'

import m from 'mithril'

import Hello from './components/Hello.js'
import store from './store.js'

var redraw = () => {
  m.render(document.body, m(Hello, store.getState()))
  return redraw
}

window.s = redraw

store.subscribe(redraw())
