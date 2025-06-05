import './usp.css'
import Aos from 'aos';
import { useEffect } from 'react';
import logo from '../media/Logo PNG File Transparent Background.png';
import stockImg from '../media/stockimg-removebg-preview.png';
import stock from '../media/stock.png';
import { BsCart3 } from "react-icons/bs";

function Usp() {
    useEffect(() => {
    Aos.init({
      duration: 800,
      once: true, // animation runs only once
    });
  }, []);
  return (
    <section className = 'container-fluid d-flex flex-column align-items-center' id = 'usp-container'>
          <div className="pt-4 d-flex justify-content-center align-items-center">
            <p className="h1 text-center m-0">Inside</p>
            <img src = {logo} className='img-fluid ms-3' height = "70px" width = "125px" data-aos = 'fade-in'></img>
            </div>
            <div className="py-4 row">
              <div className="col-lg-6 col-sm-12">
                <img src= {stock} className = 'img-fluid' alt="stock-img" height='450px' width = '100%'/>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className='row col-12'>
                      <div className='usp-icons-container d-flex justify-content-center align-items-center align-self-start col-1 mt-4'>
                        <BsCart3 className='usp-icons'/>
                      </div>
                      <div className='col-11'>
                      <p className="h3 usp-text m-0">Lorem Ipsum</p>
                      <p className="h4 text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl lacinia nunc,</p>
                      </div>
                </div>
                <div className='row col-12 mt-4'>
                      <div className='usp-icons-container d-flex justify-content-center align-items-center align-self-start col-1 mt-4'>
                        <BsCart3 className='usp-icons'/>
                      </div>
                      <div className='col-11'>
                      <p className="h3 usp-text m-0">Lorem Ipsum</p>
                      <p className="h4 text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl lacinia nunc,</p>
                      </div>
                </div>
                <div className='row col-12 mt-4'>
                      <div className='usp-icons-container d-flex justify-content-center align-items-center align-self-start col-1 mt-4'>
                        <BsCart3 className='usp-icons'/>
                      </div>
                      <div className='col-11'>
                      <p className="h3 usp-text m-0">Lorem Ipsum</p>
                      <p className="h4 text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl lacinia nunc,</p>
                      </div>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Usp
