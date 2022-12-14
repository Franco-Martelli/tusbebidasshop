import React from 'react'
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
    <Link to="/category"><a className="navbar-brand" >TusBebidas</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/category/aperitivo' > <a className="nav-link active" aria-current="page"  >Aperitivo</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/category/cerveza'> <a className="nav-link"  >Cerveza</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/category/vino'> <a className="nav-link"  >Vino</a></Link>
        </li>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>
    </div>
  )
}

export default NavBar;
