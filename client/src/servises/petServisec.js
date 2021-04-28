let url = 'http://localhost:9999/pets';


export const getAll = (category = '') => {
  url += category ? `?category=${category}` : '';

  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
};


export const getOne = () => { };


export const createPet = (name, description, imageURL, category) => {

  const data = {
    name,
    description, 
    imageURL, 
    category
  };
  return fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(err => console.log(err))
};