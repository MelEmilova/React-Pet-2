import HomeNav from "../HomeNav/HomeNav";
import Pet from '../Pet/Pet';
import { Component } from 'react';
import {getAll} from '../../servises/petServisec'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      currentCategory: 'all',
    };
  }

  componentDidMount(){
      getAll()
       .then(data => this.setState({ pets: data }))
  };

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.category;

    if (prevProps.match.params.category === category) {
      return;
    }

    getAll(category)
      .then(res => {
        this.setState({ pets: res, currentCategory: category });
      });
  }


  render() {
    console.log();
    return (
      <section className="dashboard">
        <h1>Dashboard</h1>

        <HomeNav></HomeNav>

        <ul className="other-pets-list">

          {this.state.pets.map(pet => <Pet pet={pet} key={pet.id}></Pet>)}

        </ul>
      </section>
    );
  }
}



export default Home;