import shortid from 'shortid'
import loremIpsum from 'lorem-hipsum'

import { ADD_POST } from '../actions/index'

const POSTS_INITIAL_STATE = new Array(5).fill(null).map(_ => ({id:shortid.generate(), content:loremIpsum({count:5, units:'paragraphs'})}))

export const posts = (state = POSTS_INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_POST:
      return [...state, action.payload]
    default:
      return state
  }
}