import m from 'mithril'

const Title = {
  view: (vnode) => m('h1', {class:vnode.attrs.class}, vnode.attrs.text)
}

export default Title

