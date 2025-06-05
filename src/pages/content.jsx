import './content.css'
import Aos from 'aos';
import TreeImage from '../media/tree.png';
import { useEffect } from 'react';
import { MdBusiness } from "react-icons/md";
import logo from '../media/Logo PNG File Transparent Background.png';
import { FaStar } from "react-icons/fa";

function Content() {
    useEffect(() => {
    Aos.init({
      duration: 800,
      once: true, // animation runs only once
    });
  }, []);
  return (
    <section className='container-fluid' id = 'content-container'>
        <div className = 'container'>
            <p className='h1 pt-4 home-text text-center'>Happy Clients, Smarter Trades</p>
            <div className='row gx-4 my-4 justify-content-center align-items-center'>
                <div className='row col-lg-4 col-md-12 p-0'>
                <div className="col-12 " data-aos="fade-up">
                <div class="card">
                <div class="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                    <div className  = 'avatar'><img src = {logo} className='img-fluid'></img></div>
                    <div className='ms-3'>
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle text-body-secondary">Card subtitle</h6>
                    </div>
                    </div>
                    <div className=''>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                    </div>
                    </div>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                </div>
                <div className="col-12 my-2" data-aos="fade-up">
                <div class="card">
                <div class="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                    <div className  = 'avatar'><img src = {logo} className='img-fluid'></img></div>
                    <div className='ms-3'>
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle text-body-secondary">Card subtitle</h6>
                    </div>
                    </div>
                    <div className=''>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                    </div>
                    </div>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-12" data-aos="fade-up">
                <div class="card">
                <div class="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                    <div className  = 'avatar'><img src = {logo} className='img-fluid'></img></div>
                    <div className='ms-3'>
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    </div>
                    </div>
                    <div className=''>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                    </div>
                    </div>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl lacinia nunc, a posuere eros nulla nec sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec magna vel arcu blandit scelerisque. Fusce interdum ligula id dui ultrices, nec vulputate metus fermentum. Integer finibus risus non tellus tincidunt, a facilisis justo imperdiet. Vivamus vitae ipsum vitae enim tincidunt sodales. Sed ac turpis sit amet purus finibus porttitor. Curabitur sed nisi at sapien malesuada hendrerit in nec nisi.</p>
                </div>
                </div>
                </div>
                <div className='row col-lg-4 col-md-12 p-0'>
                <div className="col-12 mt-2" data-aos="fade-up">
                <div class="card">
                <div class="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                    <div className  = 'avatar'><img src = {logo} className='img-fluid'></img></div>
                    <div className='ms-3'>
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle text-body-secondary">Card subtitle</h6>
                    </div>
                    </div>
                    <div className=''>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                    </div>
                    </div>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                </div>
                <div className="col-12 my-2" data-aos="fade-up">
                <div class="card">
                <div class="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                    <div className  = 'avatar'><img src = {logo} className='img-fluid'></img></div>
                    <div className='ms-3'>
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle text-body-secondary">Card subtitle</h6>
                    </div>
                    </div>
                    <div className=''>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                    </div>
                    </div>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content
