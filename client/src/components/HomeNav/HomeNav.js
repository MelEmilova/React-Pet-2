import { Link } from 'react-router-dom';
import {Component} from 'react';

class HomeNav extends Component{


  render() {
    return (
      <nav class="navbar">
        <ul>
          <li><Link to="/all-pets">All</Link></li>
          <li ><Link to="/Cat">Cats</Link></li>
          <li><Link to="/Dog">Dogs</Link></li>
          <li><Link to="/Parrot">Parrots</Link></li>
          <li><Link to="/Reptile">Reptiles</Link></li>
          <li><Link to="/Other">Other</Link></li>
        </ul>
      </nav>
    );
  }

}


export default HomeNav;