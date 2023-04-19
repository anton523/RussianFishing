import DoubleToString from "../addons/DoubleToStringConverter";

export const createFish = async function (fish) {
  const data = new FormData();

  let l1 = DoubleToString(fish.L1);
  let l2 = DoubleToString(fish.L2);
  let l3 = DoubleToString(fish.L3);

  data.append('ShortName', fish.ShortName)
  data.append('Name', fish.Name)
  data.append('L1', l1)
  data.append('L2', l2)
  data.append('L3', l3)
  data.append('Farm', fish.Farm)
  data.append('Biting', fish.Biting)
  data.append('Experience', fish.Experience)
  data.append('Trophy', fish.Trophy)
  data.append('Description', fish.Description)
  data.append('Image', fish.Image)

  let response = await fetch('api/pp4/fishes', {
    method: 'POST',
    body: data
  })

  return response.status === 200;
}

export const getAllFishes = async function() {
  let response = await fetch('api/pp4/fishes/all', {
    method: 'GET'
  })

  if (response.status === 200){
    return await response.json();
  }

  return [];
}