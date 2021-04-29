import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getOne, editPet, deletePet } from '../../servises/petServisec';

function DetailsPet(props) {
  let [pet, setPets] = useState({});


  useEffect(() => {
    getOne(props.match.params.petId)
      .then(res => {
        setPets(res);
      });
  }, [props.match.params.petId]);

  function liked(e) {
    let liked = pet.likes + 1;
    editPet(pet.name, pet.description, pet.imageURL, pet.category, liked, pet.id)
      .then(res => {
        setPets(state => ({ ...state, likes: liked }));
      });
  }

  function delPet(e) {
    const confirmBox = window.confirm(
      "Do you really want to delete this Pet?"
    );
    if (confirmBox === true) {
      deletePet(pet.id);
        props.history.push('/');
    }
  }

  return (
    <section className="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>Pet counter: {pet.likes}
        <button className="button" onClick={liked}><i className="fas fa-heart"></i>Pet</button>
      </p>
      <p className="img"><img src={pet.imageURL} alt="" /></p>
      <p className="description">{pet.description}</p>

      <div className="pet-info">
        <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
        <Link to="/"><button className="button" onClick={delPet}>Delete</button></Link>
      </div>

    </section>
  );
};

export default DetailsPet;