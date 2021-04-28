import {Link} from 'react-router-dom';

function Pet(props){
  return(
    <li class="otherPet">
      <h3>Name: {props.pet.name}</h3>
      <p>Category: {props.pet.category}</p>
      <p class="img"><img src={props.pet.imageURL} alt=""/></p>
      <p class="description">{props.pet.description}</p>
      <div class="pet-info">
        <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
        <Link to={`/details/${props.pet.id}`}><button class="button">Details</button></Link>
        <i class="fas fa-heart"></i> <span> 2</span>
      </div>
    </li>
  );
};

export default Pet;
