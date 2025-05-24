import './content.css'
import Aos from 'aos';
import TreeImage from '../media/tree.png';
import { useEffect } from 'react';

function Content() {
    useEffect(() => {
    Aos.init({
      duration: 800,
      once: true, // animation runs only once
    });
  }, []);
  return (
    <section id = 'content-container'>
        <div className = 'container'>
            <div className = 'row d-flex justify-content-between'>
                <div className = 'col-md-6 align-self-center' data-aos="fade-right" data-aos-anchor-placement="top-center">
                <p className='h1 content-text' id = 'head'>Expertise</p>
                <p className='h4 content-text'>The Nexus-i team carries a mix of skills in sourcing, ecommerce and logistics. Skills honed by working in leading consumer product and internet companies that provided an understanding of the importance of connecting with customers, employees and partners.
                </p>
                </div>
                <div className = 'col-md-4' data-aos="fade-left" data-aos-anchor-placement="top-center">
                    <img className = 'img-fluid' alt="home-image" src = {TreeImage}></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content
