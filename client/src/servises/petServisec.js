// let url = 'http://localhost:9999/pets';


export const getAll = (category = '') => {
  let url = 'http://localhost:9999/pets';
  url += category ? `?category=${category}` : '';
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
};


export const getOne = (petId) => {
  let url = 'http://localhost:9999/pets';
  return fetch(`${url}/${petId}`)
    .then(res => res.json())
    .catch(error => console.log(error));
};


export const createPet = (petName, description, imageURL, category) => {
  let url = 'http://localhost:9999/pets';
  const data = {
    name: petName,
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

export const editPet = (petName, description, imageURL, category, petId) => {
  let url = 'http://localhost:9999/pets';
  const data = {
    name: petName,
    description,
    imageURL,
    category
  };

  return fetch(`${url}/${petId}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(err => console.log(err))
};