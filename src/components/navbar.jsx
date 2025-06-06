import { useEffect, useState } from'react';
import logo from '../media/Logo PNG File Transparent Background.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { MdTimeline } from 'react-icons/md';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

export default function Nav() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=> {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset>1)
      console.log(offset);
    };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  },[])

return(
<>
<nav className={`navbar pt-4 ${scrolled ? 'scroller' : 'bg-body-tertiary'}`}>
  <div className="container">
    <div className='pc-container'>
        <Link to = '/'>
        <div className="navbar-brand" onClick={() => setSelectedIndex(0)}><img src = {logo} className = "img-fluid" height = "70px" width = "125px"></img></div>
        </Link>
      <div className='nav-content align-self-center'>
          <div  className = 'd-flex'>
            <div className= "nav-item" id = {`${selectedIndex === 2 ? "Item-2" : ""}`} onClick={() => setSelectedIndex(2)}>
              <p>Products</p>
            </div>
            <div className= "nav-item" id = {`${selectedIndex === 3 ? "Item-4" : ""}`} onClick={() => setSelectedIndex(3)}>
              <p aria-disabled="true">Customers</p>
            </div>
            <div className= "nav-item" id = {`${selectedIndex === 4 ? "Item-5" : ""}`} onClick={() => setSelectedIndex(4)}>
              <p aria-disabled="true">Support</p>
            </div>
            <div className= "nav-item dropdown" id = {`${selectedIndex === 1 ? "Item-1" : ""}`} onClick={() => setSelectedIndex(1)}>
              <p className="tab dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</p>
              <ul className="dropdown-menu">
                <Link to = '/about'>
                  <li>
                    <div className = 'd-flex align-items-center dropdown-item'>
                      <MdTimeline className='nav-icons' />
                      <p className = 'ms-2'>Our Story</p>
                      </div>
                  </li>
                </Link>
                <Link to = '/reachus'>
                  <li>
                    <div className = 'd-flex align-items-center dropdown-item'>
                      <FaMapMarkerAlt className='nav-icons' />
                      <p className = 'ms-2'>Reach Us</p>
                      </div>
                  </li>
                </Link>
                <li><hr className="dropdown-divider" /></li>
                <Link to = '/faq'>
                  <li>
                    <div className = 'd-flex align-items-center dropdown-item'>
                      <FaQuestionCircle className='nav-icons' />
                      <p className = 'ms-2'>FAQ</p>
                      </div>
                  </li>
                </Link>
              </ul>
          </div>
          </div>
      </div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
            <div className= "nav-item" id = {`${selectedIndex === 2 ? "Item-2" : ""}`} onClick={() => setSelectedIndex(2)}>
              <p>Products</p>
            </div>
            <div className= "nav-item" id = {`${selectedIndex === 3 ? "Item-4" : ""}`} onClick={() => setSelectedIndex(3)}>
              <p aria-disabled="true">Customers</p>
            </div>
            <div className= "nav-item" id = {`${selectedIndex === 4 ? "Item-5" : ""}`} onClick={() => setSelectedIndex(4)}>
              <p aria-disabled="true">Support</p>
            </div>
            <div className= "nav-item dropdown" id = {`${selectedIndex === 1 ? "Item-1" : ""}`} onClick={() => setSelectedIndex(1)}>
              <p className="tab dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</p>
              <ul className="dropdown-menu">
                <Link to = '/about'>
                  <li>
                    <div className = 'd-flex align-items-center dropdown-item'>
                      <MdTimeline className='nav-icons' />
                      <p className = 'ms-2'>Our Story</p>
                      </div>
                  </li>
                </Link>
                <Link to = '/reachus'>
                  <li>
                    <div className = 'd-flex align-items-center dropdown-item'>
                      <FaMapMarkerAlt className='nav-icons' />
                      <p className = 'ms-2'>Reach Us</p>
                      </div>
                  </li>
                </Link>
                <li><hr className="dropdown-divider" /></li>
                <Link to = '/faq'>
                  <li>
                    <div className = 'd-flex align-items-center dropdown-item'>
                      <FaQuestionCircle className='nav-icons' />
                      <p className = 'ms-2'>FAQ</p>
                      </div>
                  </li>
                </Link>
              </ul>
          </div>
      </ul>
    </div>
</>
    );
}