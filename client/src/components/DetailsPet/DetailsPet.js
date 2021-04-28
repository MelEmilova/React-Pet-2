import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {getOne} from '../../servises/petServisec'

function DetailsPet(props) {
  let [pet, setPets] = useState({});
  
  useEffect(() => {
    getOne(props.match.params.petId)
    .then(res => setPets(res))
  }, [props.match.params.petId]);


  return (
    <section className="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>Pet counter: {pet.likes} <Link to="#"><button className="button"><i className="fas fa-heart"></i>
                            Pet</button></Link>
      </p>
      <p className="img"><img src={pet.imageURL} alt="" /></p>
      <p className="description">{pet.description}</p>

      <div className="pet-info">
        <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
        <Link to="#"><button className="button">Delete</button></Link>
      </div>
      
    </section>

  );
};

export default DetailsPet;