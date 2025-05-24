import './home.css'
import Aos from 'aos';
import TreeImage from '../media/tree.png';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
    Aos.init({
      duration: 800,
      once: true, // animation runs only once
    });
  }, []);
  return (
    <section id = 'home-container'>
        <div className = 'container' data-aos="fade-up">
            <div className = 'row d-flex justify-content-between'>
                <div className = 'col-md-6 align-self-center'>
                <p className='h1 home-text' id = 'head'>Connect</p>
                <p className='h4 home-text'>Happy employees and partners mean happy customers. Connect and engage with your customers, employees and partners effectively.</p>
                </div>
                <div className = 'col-md-4'>
                    <img className = 'img-fluid' alt="home-image" src = {TreeImage}></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
