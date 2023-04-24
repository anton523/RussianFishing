export const createPost = async function (title, text) {
  let post = {
    Title: title,
    Text: text
  }

  let response = await fetch('api/posts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(post)
  })

  return response.status === 200;
}

export const addOrRemoveLikePost = async function(id) {
  let response = await fetch(`api/posts/likes/${id}`, {
    method: 'GET'
  })

  if (response.status === 200){
    return response.json();
  }

  throw new Error();
}

export const addViewPost = async function(id) {
  let response = await fetch(`api/posts/views/${id}`, {
    method: 'GET'
  })

  return response.status === 200;
}

export const getPostById = async function (id) {
  let response = await fetch(`api/posts/${id}`, {
    method: 'GET'
  })

  if (response.status === 200) {
    return response.json();
  }

  return null;
}

export const getAllPosts = async function () {
  let response = await fetch('api/posts', {
    method: 'GET'
  })

  if (response.status === 200) {
    return response.json();
  }

  return null;
}

export const uploadPostImage = async function (formData) {
  let response = await fetch('api/images/upload-image', {
    method: 'POST',
    body: formData
  })

  if (response.status === 200) {
    var text = await response.text();
    return text;
  }

  return null;
}