export const createFishingline = async function (fishingline) {
  let response = await fetch('/api/pp4/hooks/fishing-lines', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(fishingline)
  })

  return response.status === 200;
}

export const createHook = async function (hook) {
  let response = await fetch('/api/pp4/hooks/hooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(hook)
  })

  return response.status === 200;
}

export const getAllFishingLines = async function () {
  let response = await fetch('/api/pp4/hooks/fishing-lines', {
    method: 'GET'
  })

  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
}

export const getAllHooks = async function () {
  let response = await fetch('/api/pp4/hooks/hooks', {
    method: 'GET'
  })

  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
}