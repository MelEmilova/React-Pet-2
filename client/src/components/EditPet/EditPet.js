import React, { useEffect, useState } from 'react';
import { getOne, editPet } from '../../servises/petServisec';
import FormError from '../Shared/FormError/FormError';


function EditPet(props) {

  const [pet, setPets] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getOne(props.match.params.petId)
      .then(res => setPets(res));
  }, [props.match.params.petId]);


  function onDescriptionEditSave(e) {
    e.preventDefault();
    editPet(pet.name, e.target.description.value, pet.imageURL, pet.category, pet.id)
      .then(res => {
        props.history.push('/');
      });

  }

  function onDescriptionChangeHandler(e) {
    console.log(e.target.value);
    if (e.target.value.length < 10) {
      setErrorMessage('Description must be at least 10 characters long!');
    } else {
      setErrorMessage('');
    }
  }

  return (
    <section className="detailsMyPet">
      <h3>{pet.name}</h3>
      <p>Pet counter: <i className="fas fa-heart"></i> {pet.liked}</p>
      <p className="img"><img
        src={pet.imageURL} alt="" /></p>
      <form onSubmit={onDescriptionEditSave}>
        <textarea type="text" name="description" defaultValue={pet.description} onChange={onDescriptionChangeHandler}></textarea>
        <FormError>{errorMessage}</FormError>
        <button className="button"> Save</button>
      </form>
    </section>
  );
};

export default EditPet;