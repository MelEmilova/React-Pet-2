import {Link} from 'react-router-dom';

const Pet = (props) => {
  let id = props.pet.id
  return(
    <li className="otherPet">
      <h3>Name: {props.pet.name}</h3>
       <p>Category: {props.pet.category}</p>
       <p className="img"><img src={props.pet.imageURL} alt=""/></p>
      <p className="description">{props.pet.description}</p>
       <div className="pet-info">
         <Link to="/"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link>
         
        <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
        <i className="fas fa-heart"></i> <span> 2</span>
      </div>
    </li>
  );
};

export default Pet;
