import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { posts } from './reducers/index'

const reducers = combineReducers({
  posts
})


export default createStore(reducers, applyMiddleware(thunk))