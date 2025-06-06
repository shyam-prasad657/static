import './carousel.css'
import logo from '../media/Logo PNG File Transparent Background.png';
import Marquee from 'react-fast-marquee';


function CarouselComponent() {

  return (
    <section className='container-fluid d-flex flex-column align-items-center' id = 'carousel-container'>
        <p className="h2 carousel-text mt-4">Clients Who Trust Us</p>
        <div className="px-2 mt-4"><Marquee gradient = {true} gradientColor = '#D6D6D6'>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
        </Marquee></div>
    </section>
  )
}

export default CarouselComponent