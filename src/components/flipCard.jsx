import './flipCard.css';
import logo from '../media/Logo PNG File Transparent Background.png';
import { TbView360Arrow } from "react-icons/tb";

function FlipCard() {
    return(
        <div className="flip-card p-2">
            <div className='flip-card-inner'>
            <div className='flip-card-front px-2 py-3'>
            <img src = {logo} alt = "avatar" className='img-fluid' height = "70px" width = "125px"/>
            <h5 className="card-title mt-4">Lorem Ipsum</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit.
            <TbView360Arrow className='ms-3 h4 m-0'/>
            </p>
            </div>
            <div className='flip-card-back px-2 py-3'>
                <h5 className='mt-4'>About</h5>
                <p className='card-text mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit.</p>
            </div>
            </div>
        </div>
    )
}
export default FlipCard;