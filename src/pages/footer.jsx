import './footer.css'
import logo from '../media/Logo PNG File Transparent Background.png';

function Footer() {
  return (
    <footer className='container-fluid d-flex flex-column justify-content-center align-items-center' id = 'footer-container'>
        <img src = {logo} className='img-fluid' width = '130px'></img>
        <p id = 'footer-text'>© 2025, Nexus Innovative Solutions Pvt. Ltd. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
