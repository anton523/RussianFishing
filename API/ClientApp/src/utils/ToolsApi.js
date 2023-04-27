import DoubleToString from "../addons/DoubleToStringConverter";

export const createSlingshot = async function (slingshot) {
  let response = await fetch('/api/pp4/tools/slingshots', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(slingshot)
  })

  return response.status === 200;
}

export const updateSlingshot = async function (id, slingshot) {
  let response = await fetch(`/api/pp4/tools/slingshots/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(slingshot)
  })

  return response.status === 200;
}

export const getAllSlingshots = async function () {
  let response = await fetch('/api/pp4/tools/slingshots', {
    method: 'GET'
  })

  if (response.status === 200){
    return response.json();
  } else {
    return null;
  }
}

export const createTool = async function (tool) {
  var formData = new FormData();

  let silverPrice = DoubleToString(tool.SilverPrice);
  let goldPrice = DoubleToString(tool.GoldPrice);

  formData.append('Name', tool.Name);
  formData.append('Description', tool.Description);
  formData.append('SilverPrice', silverPrice);
  formData.append('GoldPrice', goldPrice);
  formData.append('Image', tool.Image);

  let response = await fetch('/api/pp4/tools/tools', {
    method: 'POST',
    body: formData
  })

  return response.status === 200;
}

export const updateTool = async function (id, tool) {
  var formData = new FormData();

  let silverPrice = DoubleToString(tool.SilverPrice);
  let goldPrice = DoubleToString(tool.GoldPrice);

  formData.append('Name', tool.Name);
  formData.append('Description', tool.Description);
  formData.append('SilverPrice', silverPrice);
  formData.append('GoldPrice', goldPrice);
  formData.append('Image', tool.Image);

  let response = await fetch(`/api/pp4/tools/tools/${id}`, {
    method: 'PUT',
    body: formData
  })

  return response.status === 200;
}

export const getAllTools = async function () {
  let response = await fetch('/api/pp4/tools/tools', {
    method: 'GET'
  })

  if (response.status === 200){
    return response.json();
  } else {
    return null;
  }
}

export const deleteTool = async function(id) {
  let response = await fetch(`/api/pp4/tools/tools/${id}`, {
    method: 'DELETE'
  });

  return response.status === 200;
}

export const deleteSlingshot = async function(id) {
  let response = await fetch(`/api/pp4/tools/slingshots/${id}`, {
    method: 'DELETE'
  });

  return response.status === 200;
}