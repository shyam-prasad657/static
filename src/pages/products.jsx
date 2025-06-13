import './products.css';
import doodle from '../media/doodle.jpg';
import ScrollSpyComponent from '../components/scrollspy';
import FlipCard from '../components/flipCard';

function Products() {
    return (
        <section className='container-fluid px-0' id='products-container'>
            <div className="container py-5">
                <p className="h2 products-text text-center">
                    Lorem Ipsum
                </p>
                <p className="h4 products-text text-center text-body-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est
                </p>
                <p className="products-text mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.
                </p>
            </div>
            <img src = {doodle} className='img-flui' height='190px' width= '100%'></img>
            <div className="container py-5">
                <p className="h2 products-text text-center mb-4">
                    Lorem Ipsum
                </p>
                <div className="row">
                <div className="col-lg-3 col-md-12 mb-2"><FlipCard/></div>
                <div className="col-lg-3 col-md-12 mb-2"><FlipCard/></div>
                <div className="col-lg-3 col-md-12 mb-2"><FlipCard/></div>
                <div className="col-lg-3 col-md-12 mb-2"><FlipCard/></div>
                <div className="col-lg-3 col-md-12 mb-2"><FlipCard/></div>
                <div className="col-lg-3 col-md-12 mb-2"><FlipCard/></div>
                <div className="col-lg-3 col-md-12 mb-2"><FlipCard/></div>
                <div className="col-lg-3 col-md-12 mb-2"><FlipCard/></div>
                </div>
            </div>
            <div className='p-5 d-flex justify-content-center' id="scrollspy-container">
                <ScrollSpyComponent />
            </div>
            <div className="container py-5">
                <p className="products-text mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.
                </p>
            </div>
        </section>
    )
}

export default Products