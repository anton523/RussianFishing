export const createComment = async function (text, id) {
  let comment = {
    Text: text,
    PostId: id
  }

  let response = await fetch('api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(comment)
  })

  if (response.status === 200) {
    return await response.json();
  }

  throw new Error();
}