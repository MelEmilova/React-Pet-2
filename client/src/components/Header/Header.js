import {Link} from 'react-router-dom';

function Header(){
  return(
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className="first-bar">
            <Link to="/">Dashboard</Link>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/pets/create">Add Pet</Link>
          </div>
          <div>
            <Link className="button" to="/demo">Demo Funck</Link>
          </div>
          <div className="second-bar">
            <ul>
              <li>Welcome, Mel!</li>
              <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
            </ul>
          </div>
        </section>
        <section className="navbar-anonymous">
          <ul>
            <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
            <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header; 