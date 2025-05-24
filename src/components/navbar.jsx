import { useState } from'react';
import logo from '../media/Logo PNG File Transparent Background.png';
import './navbar.css';
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Nav() {
  const [selectedIndex, setSelectedIndex] = useState(null);

return(
<nav className="navbar bg-body-tertiary pt-4">
  <div className="container">
    <div className='pc-container'>
        <a className="navbar-brand" href="#"><img src = {logo} className = "img-fluid" height = "70px" width = "125px"></img></a>
      <div className='nav-content align-self-center'>
          <div  className = 'd-flex tabs'>
          <div className= "nav-item dropdown" id = {`${selectedIndex === 1 ? "Item-1" : ""}`} onClick={() => setSelectedIndex(1)}>
              <p className="tab dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</p>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item" href="#">Action</p></li>
                <li><p className="dropdown-item" href="#">Action</p></li>
                <li><p className="dropdown-item" href="#">Action</p></li>
                <li><p className="dropdown-item" href="#">Another action</p></li>
                <li><hr className="dropdown-divider" /></li>
                <li><p className="dropdown-item" href="#">Something else here</p></li>
              </ul>
          </div>
          <div className = 'd-flex align-self-start'>
          <div className= "nav-item" id = {`${selectedIndex === 2 ? "Item-2" : ""}`} onClick={() => setSelectedIndex(2)}>
              <p className="tab" href="#">Products</p>
            </div>
            <div className= "nav-item" id = {`${selectedIndex === 3 ? "Item-4" : ""}`} onClick={() => setSelectedIndex(3)}>
              <p className="tab" href = "#" aria-disabled="true">Customers</p>
            </div>
            <div className= "nav-item" id = {`${selectedIndex === 4 ? "Item-5" : ""}`} onClick={() => setSelectedIndex(4)}>
              <p className="tab" href = "#" aria-disabled="true">Support</p>
            </div>
            <div className= "nav-item" id = {`${selectedIndex === 5 ? "Item-6" : ""}`} onClick={() => setSelectedIndex(5)}>
              <p className="tab" href = "#" aria-disabled="true">About</p>
            </div>
          </div>
          </div>
      </div>
      
    </div>
    {/* logout */}
    <div className='d-flex nav-content'>
        <div>
          logout
        </div>
        <div >
        <MdOutlineShoppingCart className="icon"/>
        </div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
        <li className= "nav-item dropdown">
          <p a className="tab dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</p>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" href="#">Action</p></li>
            <li><p className="dropdown-item" href="#">Action</p></li>
            <li><p className="dropdown-item" href="#">Action</p></li>
            <li><p className="dropdown-item" href="#">Another action</p></li>
            <li><hr className="dropdown-divider" /></li>
            <li><p className="dropdown-item" href="#">Something else here</p></li>
          </ul>
        </li>
        <li className= "nav-item">
          <p className="tab " href="#">Products</p>
        </li>
        <li className= "nav-item">
          <p className="tab " href = "#" aria-disabled="true">Customers</p>
        </li>
        <li className= "nav-item">
          <p className="tab" href = "#" aria-disabled="true">Support</p>
        </li>
        <li className= "nav-item">
          <p className="tab" href = "#" aria-disabled="true">About</p>
        </li>
      </ul>
    </div>
</nav>
    );
}