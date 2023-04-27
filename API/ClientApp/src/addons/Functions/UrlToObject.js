export const urlToObject= async(imageURL)=> {
  const response = await fetch(imageURL);
  const blob = await response.blob();
  const file = new File([blob], 'image.jpg', {type: blob.type});
  return file;
}