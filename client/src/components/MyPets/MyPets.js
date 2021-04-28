import {Link} from 'react-router-dom';

function MyPets() {
  return (
    <section class="my-pets">
      <h1>My Pets</h1>
      <ul class="my-pets-list">
        <section class="myPet">
          <h3>Name: Pesho</h3>
          <p>Category: Cat</p>
          <p class="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
          <p class="description">This is my cat Pesho</p>
          <div class="pet-info">
            <Link to="#"><button class="button">Details</button></Link>
            <Link to="#"><button class="button">Delete</button></Link>
            <i class="fas fa-heart"></i> <span>5</span>
          </div>
        </section>

      </ul>
    </section>
  );
};

export default MyPets;