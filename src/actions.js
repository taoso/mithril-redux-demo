export const INCR = 'INCR'
export const NEW_TITLE = 'NEW_TITLE'

export function incr() {
  return { type: INCR }
}

export function newTitle(text) {
  return {
    type: NEW_TITLE,
    text
  }
}
