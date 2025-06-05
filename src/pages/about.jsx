import './about.css'
import Aos from 'aos';
import profile from '../media/stevejobs-removebg-preview.png';
import doodle from '../media/doodle.jpg';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        Aos.init({
          duration: 800,
          once: true, // animation runs only once
        });
      }, []);
    return (
        <section className='container-fluid px-0 py-2' id='about-container'>
            <div className="container py-5">
            <p className="h2 about-text text-center">This is where it all began</p>
            <p className="h4 text-center text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, justo at suscipit laoreet, eros lacus tincidunt lacus, in egestas eros ipsum in magna. Nulla facilisi. Sed nec lorem et nunc lacinia bibendum. Integer at ligula non odio eleifend posuere vitae ut metus.
            </p>
            </div>
            <div id = "about-img-container">
                <img src = {doodle} className='img-fluid'></img>
            </div>
            <div className="container pt-4">
            <div className='h3 text-center mt-4'>Meet The Visionaries Behind</div>
            <div className="row py-4 justify-content-between align-items-center">
                <div className="col-md-6" data-aos = 'fade-right'>
                    <p className='h4 about-text m-0'>Lorem Ipsum</p>
                    <p className="h5 text-body-secondary">CEO</p>
                    <p className="h5 about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, lacus non vulputate ultrices, est arcu efficitur eros, nec viverra libero magna a purus. In varius, lorem in fermentum suscipit, sapien sapien congue odio, in vestibulum turpis lacus sed turpis. Suspendisse potenti. Integer non tellus at augue porttitor pulvinar. Etiam ut convallis orci. Praesent fringilla, lorem sed aliquet euismod, metus orci fermentum erat, a finibus.</p>
                    <div className="row px-4 justify-content-end align-items-center">
                        <p className="h4 about-text m-0 col-6 text-end">Get in touch</p>
                        <div className="about-icon-container ms-2 col-auto" id = 'linkedin-background'>
                            <FaLinkedinIn className='about-icons' id='linkedin'/>
                        </div>
                        <div className="about-icon-container ms-2 col-auto" id = 'x-background'>
                            <FaXTwitter className='about-icons'id='x'/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 order-first order-md-2 order-md-2" data-aos = 'fade-in'>
                    <img src = {profile} className='img-fluid' height= '40px'></img>
                </div>
            </div>
            <div className="row py-4 justify-content-between align-items-center">
                <div className="col-md-6" data-aos = 'fade-right'>
                    <p className='h4 about-text m-0'>Lorem Ipsum</p>
                    <p className="h5 text-body-secondary">CEO</p>
                    <p className="h5 about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, lacus non vulputate ultrices, est arcu efficitur eros, nec viverra libero magna a purus. In varius, lorem in fermentum suscipit, sapien sapien congue odio, in vestibulum turpis lacus sed turpis. Suspendisse potenti. Integer non tellus at augue porttitor pulvinar. Etiam ut convallis orci. Praesent fringilla, lorem sed aliquet euismod, metus orci fermentum erat, a finibus.</p>
                    <div className="row px-4 justify-content-end align-items-center">
                        <p className="h4 about-text m-0 col-6 text-end">Get in touch</p>
                        <div className="about-icon-container ms-2 col-auto" id = 'linkedin-background'>
                            <FaLinkedinIn className='about-icons' id='linkedin'/>
                        </div>
                        <div className="about-icon-container ms-2 col-auto" id = 'x-background'>
                            <FaXTwitter className='about-icons'id='x'/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 order-first order-md-2 order-md-2" data-aos = 'fade-in'>
                    <img src = {profile} className='img-fluid' height= '40px'></img>
                </div>
            </div>
            <div className="row py-4 justify-content-between align-items-center">
                <div className="col-md-6" data-aos = 'fade-right'>
                    <p className='h4 about-text m-0'>Lorem Ipsum</p>
                    <p className="h5 text-body-secondary">CEO</p>
                    <p className="h5 about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, lacus non vulputate ultrices, est arcu efficitur eros, nec viverra libero magna a purus. In varius, lorem in fermentum suscipit, sapien sapien congue odio, in vestibulum turpis lacus sed turpis. Suspendisse potenti. Integer non tellus at augue porttitor pulvinar. Etiam ut convallis orci. Praesent fringilla, lorem sed aliquet euismod, metus orci fermentum erat, a finibus.</p>
                    <div className="row px-4 justify-content-end align-items-center">
                        <p className="h4 about-text m-0 col-6 text-end">Get in touch</p>
                        <div className="about-icon-container ms-2 col-auto" id = 'linkedin-background'>
                            <FaLinkedinIn className='about-icons' id='linkedin'/>
                        </div>
                        <div className="about-icon-container ms-2 col-auto" id = 'x-background'>
                            <FaXTwitter className='about-icons'id='x'/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 order-first order-md-2 order-md-2" data-aos = 'fade-in'>
                    <img src = {profile} className='img-fluid' height= '40px'></img>
                </div>
            </div>
            
            </div>
        </section>
    )
}

export default About