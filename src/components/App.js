import m from 'mithril'
import Title from './Title.js'
import Form from './Form.js'
import store from '../store.js'

const App = {
  view: (vnode) => m('main', [
    m(Title, vnode.attrs.title),
    m(Form, vnode.attrs.counter),
  ])
}

export default App

