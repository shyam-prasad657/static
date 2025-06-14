import './carousel.css'
import logo from '../media/Logo PNG File Transparent Background.png';
import Marquee from 'react-fast-marquee';


function CarouselComponent() {

  return (
    <section className='container-fluid px-0 d-flex flex-column align-items-center' id = 'carousel-container'>
      <div className="container px-0 mx-0 py-5">
        <p className="h2 carousel-text text-center">Clients Who Trust Us</p>
        <div className="px-0 mt-4"><Marquee gradient = {true} gradientColor = '#FFFFFF'>
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
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
            <img src = {logo} className='img-fluid ms-4' height= '70px' width='150px'></img>
        </Marquee></div>
        </div>
    </section>
  )
}

export default CarouselComponent
