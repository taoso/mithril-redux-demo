import m from 'mithril'

export const INCR = 'INCR'
export const NEW_TITLE = 'NEW_TITLE'
export const NEW_NEWS = 'NEW_NEWS'

export function incr() {
  return { type: INCR }
}

export function newTitle(text) {
  return {
    type: NEW_TITLE,
    text
  }
}

export function newNews() {
  return (dispatch) => m.request({
    method: 'get',
    url: 'https://hacker-news.firebaseio.com/v0/item/2921983.json',
  }).then((news) => {
    dispatch(newTitle(news.text))
  })
}
