import {Link} from 'react-router-dom';

function MyPets() {
  return (
    <section className="my-pets">
      <h1>My Pets</h1>
      <ul className="my-pets-list">
        <section className="myPet">
          <h3>Name: Pesho</h3>
          <p>Category: Cat</p>
          <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
          <p className="description">This is my cat Pesho</p>
          <div className="pet-info">
            <Link to="#"><button className="button">Details</button></Link>
            <Link to="#"><button className="button">Delete</button></Link>
            <i className="fas fa-heart"></i> <span>5</span>
          </div>
        </section>

      </ul>
    </section>
  );
};

export default MyPets;