import {Link} from 'react-router-dom';

function DetailsPet(props) {
  console.log(props);


  
  return (
    <section className="detailsOtherPet">
      <h3>Spirit</h3>
      <p>Pet counter: 7 <Link to="#"><button className="button"><i className="fas fa-heart"></i>
                            Pet</button></Link>
      </p>
      <p className="img"><img src="http://pngimg.com/uploads/horse/horse_PNG321.png" alt="" /></p>
      <p className="description">This is my horse Spirit</p>
    </section>

  );
};

export default DetailsPet;