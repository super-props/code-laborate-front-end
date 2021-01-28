import axios from 'axios'
import apiUrl from '../apiConfig'

// Create
export const createComment = (content, user, postId) => {
  console.log('this is content in axios', content)
  return axios({
    url: apiUrl + '/comments',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      comment: {
        content: content.content,
        postId: postId
      }
    }
  })
}

// Update
export const updateComment = (content, user, postId, commentId) => {
  return axios({
    url: apiUrl + '/comments/' + commentId,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      comment: {
        content: content.content,
        postId: postId
      }
    }
  })
}

// Delete
export const commentDestroy = (commentId, postId, user) => {
  return axios({
    url: apiUrl + '/comments/' + commentId,
    method: 'DELETE',
    data: {
      comment: {
        postId: postId
      }
    },
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
