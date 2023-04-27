import DoubleToString from "../addons/DoubleToStringConverter";

export const createNaturalBait = async function (naturalBait) {
  const data = new FormData();

  let silverPrice = ('' + naturalBait.SilverPrice).replace('.', ',');
  let goldPrice = ('' + naturalBait.GoldPrice).replace('.', ',');
  let weight = ('' + naturalBait.Weight).replace('.', ',');
 
  data.append('Type', naturalBait.Type)
  data.append('Name', naturalBait.Name)
  data.append('Sort', naturalBait.Sort)
  data.append('SilverPrice', silverPrice)
  data.append('GoldPrice', goldPrice)
  data.append('Skill', naturalBait.Skill)
  data.append('Weight', weight)
  data.append('Bait', naturalBait.Bait)
  data.append('Manufacturer', naturalBait.Manufacturer)
  data.append('Small', naturalBait.Small)
  data.append('Medium', naturalBait.Medium)
  data.append('Big', naturalBait.Big)
  data.append('Huge', naturalBait.Huge)
  data.append('Soluble', naturalBait.Soluble)
  data.append('Amount', naturalBait.Amount)
  data.append('Image', naturalBait.Image)

  let response = await fetch('api/pp4/baits/natural', {
    method: 'POST',
    body: data
  })

  return response.status === 200;
}

export const updateNaturalBait = async function (id, naturalBait) {
  const data = new FormData();

  let silverPrice = ('' + naturalBait.SilverPrice).replace('.', ',');
  let goldPrice = ('' + naturalBait.GoldPrice).replace('.', ',');
  let weight = ('' + naturalBait.Weight).replace('.', ',');
 
  data.append('Type', naturalBait.Type)
  data.append('Name', naturalBait.Name)
  data.append('Sort', naturalBait.Sort)
  data.append('SilverPrice', silverPrice)
  data.append('GoldPrice', goldPrice)
  data.append('Skill', naturalBait.Skill)
  data.append('Weight', weight)
  data.append('Bait', naturalBait.Bait)
  data.append('Manufacturer', naturalBait.Manufacturer)
  data.append('Small', naturalBait.Small)
  data.append('Medium', naturalBait.Medium)
  data.append('Big', naturalBait.Big)
  data.append('Huge', naturalBait.Huge)
  data.append('Soluble', naturalBait.Soluble)
  data.append('Amount', naturalBait.Amount)
  data.append('Image', naturalBait.Image)

  let response = await fetch(`api/pp4/baits/natural/${id}`, {
    method: 'PUT',
    body: data
  })

  return response.status === 200;
}

export const createUnaturalBait = async function (unnaturalBait) {
  var data = new FormData();

  let price = DoubleToString(unnaturalBait.Price);
  let weight = DoubleToString(unnaturalBait.Weight);

  data.append('Type', unnaturalBait.Type);
  data.append('Name', unnaturalBait.Name);
  data.append('Weight', weight);
  data.append('Manufacturer', unnaturalBait.Manufacturer);
  data.append('Size', unnaturalBait.Size);
  data.append('Floatation', unnaturalBait.Floatation);
  data.append('Tees', unnaturalBait.Tees);
  data.append('Variants', unnaturalBait.Variants);
  data.append('Price', price);
  data.append('Brand', unnaturalBait.Brand);
  data.append('Sort', unnaturalBait.Sort);
  data.append('Shop', unnaturalBait.Shop);
  data.append('Image', unnaturalBait.Image);

  let response = await fetch('api/pp4/baits/unnatural', {
    method: 'POST',
    body: data
  })

  return response.status === 200;
}

export const updateUnnaturalBait = async function (id, unnaturalBait) {
  var data = new FormData();

  let price = DoubleToString(unnaturalBait.Price);
  let weight = DoubleToString(unnaturalBait.Weight);

  data.append('Type', unnaturalBait.Type);
  data.append('Name', unnaturalBait.Name);
  data.append('Weight', weight);
  data.append('Manufacturer', unnaturalBait.Manufacturer);
  data.append('Size', unnaturalBait.Size);
  data.append('Floatation', unnaturalBait.Floatation);
  data.append('Tees', unnaturalBait.Tees);
  data.append('Variants', unnaturalBait.Variants);
  data.append('Price', price);
  data.append('Brand', unnaturalBait.Brand);
  data.append('Sort', unnaturalBait.Sort);
  data.append('Shop', unnaturalBait.Shop);
  data.append('Image', unnaturalBait.Image);

  let response = await fetch(`api/pp4/baits/unnatural/${id}`, {
    method: 'PUT',
    body: data
  })

  return response.status === 200;
}

export const getAllUnaturalBaits = async function() {
  let response = await fetch('api/pp4/baits/unnatural/all', {
    method: 'GET'
  })

  let json = await response.json();

  return json;
}

export const getAllNaturalBaits = async function() {
  let response = await fetch('api/pp4/baits/natural/all', {
    method: 'GET'
  })

  let json = await response.json();

  return json;
}

export const deleteNaturalBait = async function(id) {
  let response = await fetch (`api/pp4/baits/natural/${id}`, {
    method: 'DELETE'
  });

  return response.status === 200;
}

export const deleteUnnaturalBait = async function(id) {
  let response = await fetch (`api/pp4/baits/unnatural/${id}`, {
    method: 'DELETE'
  });

  return response.status === 200;
}