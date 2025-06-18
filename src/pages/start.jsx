import './start.css'
import Aos from 'aos';
import TreeImage from '../media/tree.png';
import { useEffect } from 'react';
import { MdBusiness } from "react-icons/md";

function Start() {
    useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true, // animation runs only once
    });
  }, []);
  return (
    <section className = 'container-fluid' id = 'home-container'>
          <div className='container pt-5'>
            <div className = 'row justify-content-between'>
                <div className = 'col-md-6 align-self-center' data-aos="fade-right">
                <p className='h2 home-text' id = 'head'>Connect</p>
                <p className='h4 text-body-secondary home-text'>Happy employees and partners mean happy customers. Connect and engage with your customers, employees and partners effectively.</p>
                </div>
                <div className = 'col-md-4'>
                    <img className = 'img-fluid' alt="home-image" src = {TreeImage}></img>
                </div>
            </div>
            </div>
          <div className='container pb-5'>
            <div className= 'row justify-content-between'>
            <p className='h2 home-text col-md-12 text-center'>One Stop Corporate Gifting Solution</p>
              <div className = 'col-md-3 d-flex align-items-center'><MdBusiness className='icons'/><p className='h5 home-text my-0 mx-2' data-aos="fade-up">Lorem Ipsum</p></div>
              <div className = 'col-md-3 d-flex align-items-center'><MdBusiness className='icons'/><p className='h5 home-text my-0 mx-2' data-aos="fade-up">Lorem Ipsum</p></div>
              <div className = 'col-md-3 d-flex align-items-center'><MdBusiness className='icons'/><p className='h5 home-text my-0 mx-2' data-aos="fade-up">Lorem Ipsum</p></div>
              <div className = 'col-md-3 d-flex align-items-center'><MdBusiness className='icons'/><p className='h5 home-text my-0 mx-2' data-aos="fade-up">Lorem Ipsum</p></div>
            </div>
            </div>
    </section>
  )
}

export default Start
