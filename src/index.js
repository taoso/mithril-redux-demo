import './css/app.css'

import m from 'mithril'

import App from './components/App.js'
import store from './store.js'

var redraw = () => {
  m.render(document.body, m(App, store.getState()))
  return redraw
}

store.subscribe(redraw())
