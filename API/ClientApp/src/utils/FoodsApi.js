export const createAlcohol = async function (alcohol) {
  let response = await fetch('/api/pp4/foods/alcohol', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(alcohol)
  })

  return response.status === 200;
}
export const getAllAlcohol = async function () {
  let response = await fetch('/api/pp4/foods/alcohol', {
    method: 'GET'
  })

  if (response.status === 200){
    return response.json();
  } else {
    return [];
  }
} 
