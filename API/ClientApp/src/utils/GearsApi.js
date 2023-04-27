export const createCoil = async function (coil) {
  let response = await fetch('/api/pp4/gears/coils', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(coil)
  })

  return response.status === 200;
}

export const updateCoil = async function (id, coil) {
  let response = await fetch(`/api/pp4/gears/coils/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(coil)
  })

  return response.status === 200;
}

export const getAllCoils = async function () {
  let response = await fetch('/api/pp4/gears/coils', {
    method: 'GET'
  })

  if (response.status === 200) {
    return response.json();
  } else {
    return [];
  }
}

export const createRod = async function (rod) {
  let response = await fetch('/api/pp4/gears/rods', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(rod)
  })

  return response.status === 200;
}

export const updateRod = async function (id, rod) {
  let response = await fetch(`/api/pp4/gears/rods/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(rod)
  })

  return response.status === 200;
}

export const getAllRods = async function () {
  let response = await fetch('/api/pp4/gears/rods', {
    method: 'GET'
  })

  if (response.status === 200) {
    return response.json();
  } else {
    return [];
  }
}

export const deleteCoil = async function(id) {
  let response = await fetch(`/api/pp4/gears/coils/${id}`, {
    method: 'DELETE'
  });

  return response.status === 200;
}

export const deleteRod = async function(id) {
  let response = await fetch(`/api/pp4/gears/rods/${id}`, {
    method: 'DELETE'
  });

  return response.status === 200;
}