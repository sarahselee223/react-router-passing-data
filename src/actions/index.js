import shortid from 'shortid'

export const ADD_POST = 'ADD_POST'

export const addPost = (content, cb) => 
  dispatch => {
    dispatch({
      type: ADD_POST,
      payload: {
        id: shortid.generate(),
        content
      }
    })

    cb()
  }
