import './start.css'
import Aos from 'aos';
import TreeImage from '../media/tree.png';
import { useEffect } from 'react';
import { MdBusiness } from "react-icons/md";

function Start() {
    useEffect(() => {
    Aos.init({
      duration: 800,
      once: true, // animation runs only once
    });
  }, []);
  return (
    <section className = 'container-fluid py-4' id = 'home-container'>
          <div className='container'>
            <div className = 'row d-flex justify-content-between'>
                <div className = 'col-md-6 align-self-center' data-aos="fade-right">
                <p className='h1 home-text' id = 'head'>Connect</p>
                <p className='h4 home-text'>Happy employees and partners mean happy customers. Connect and engage with your customers, employees and partners effectively.</p>
                </div>
                <div className = 'col-md-4'>
                    <img className = 'img-fluid' alt="home-image" src = {TreeImage}></img>
                </div>
            </div>
            </div>
          <div className='container'>
            <div className= 'row d-flex justify-content-between'>
            <p className='h1 home-text col-md-12 text-center'>One Stop Corporate Gifting Solution</p>
              <div className = 'col-md-3 d-flex'><MdBusiness className='icons'/><p className='h4 home-text mx-2' data-aos="fade-up">Lorem Ipsum</p></div>
              <div className = 'col-md-3 d-flex'><MdBusiness className='icons'/><p className='h4 home-text mx-2' data-aos="fade-up">Lorem Ipsum</p></div>
              <div className = 'col-md-3 d-flex'><MdBusiness className='icons'/><p className='h4 home-text mx-2' data-aos="fade-up">Lorem Ipsum</p></div>
              <div className = 'col-md-3 d-flex'><MdBusiness className='icons'/><p className='h4 home-text mx-2' data-aos="fade-up">Lorem Ipsum</p></div>
            </div>
            </div>
    </section>
  )
}

export default Start
