import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route,  Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CreatePet from './components/CreatePet/CreatePet';
import Home from './components/Home/Home';
import MyPets from './components/MyPets/MyPets';
import DetailsPet from './components/DetailsPet/DetailsPet';
import EditPet from './components/EditPet/EditPet';
import DemoFunck from './components/DemoFunck/DemoFunc';


function App() {
  return (
    <div id="container" >

      <Header></Header>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/demo" exact component={DemoFunck}></Route>
        <Route path="/pets/details/:petId" exact  component={DetailsPet}></Route>
        <Route path="/pets/details/:petId/edit" component={EditPet}></Route>

        <Route path="/pets/create" component={CreatePet}></Route>


        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/my-pets" component={MyPets}></Route>
        <Route path="/:category" component={Home} />

     


      </Switch>



      <Footer></Footer>


      <style jsx="true">{`
        body {
   padding: 0;
   margin: 0;
   background-color: #eff4f4;
   background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23bae6f2' fill-opacity='0.49' fill-rule='evenodd'/%3E%3C/svg%3E");
 }

 .basic {
   background: linear-gradient(rgba(250, 248, 248, 0.2), rgba(25, 167, 173, 0.2)), no-repeat center;
   background-size: cover;
   height: 85vh;
   position: relative;
   overflow: hidden;
 }


 #container {
   width: 100%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   padding: 0;
 }

.basic h1{
    text-align: center;
    margin: 0rem;
    padding: 2rem 0 1rem 0;
}
`}</style>
    </div>


  );
}

export default App;
