const GetAll = async () => {
  const response = await fetch('/api/maps/all', {
    method: 'GET'
  });

  if (response.status === 200) {
    return await response.json();
  }

  throw new Error();
};

const GetById = async (id) => {
  const response = await fetch(`/api/maps/${id}`, {
    method: 'GET'
  });

  if (response.status === 200) {
    return await response.json();
  }

  throw new Error();
};

const Create = async (name, description, titleImage, mapImage, idFishes) => {
  const formData = new FormData();
  formData.append('Name', name);
  formData.append('Description', description);
  formData.append('TitleImage', titleImage);
  formData.append('MapImage', mapImage);

  for (var i = 0; i < idFishes.length; i++) {
    formData.append('IdFishes[]', idFishes[i]);
  }

  const response = await fetch('/api/maps', {
    method: 'POST',
    body: formData
  });

  return response.status === 200;
};

const Delete = async (id) => {
  const response = await fetch(`/api/maps/${id}`, {
    method: 'DELETE',
  });

  return response.status === 200;
};

export default {
  GetAll,
  GetById,
  Create,
  Delete
}