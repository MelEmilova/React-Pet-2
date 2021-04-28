
export const getAll = (category = '') => {
  let url = 'http://localhost:9999/pets';
  url += category ? `?category=${category}` : '';

 return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
};