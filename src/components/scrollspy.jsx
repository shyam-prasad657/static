import './scrollspy.css'
import { useEffect, useRef, useState } from 'react';
import doodle from '../media/doodle.jpg';

function ScrollSpyComponent() {
    const topRef = useRef(null);
    const rightRef1 = useRef(null);
    const rightRef2 = useRef(null);
    const rightRef3 = useRef(null);
    const rightRef4 = useRef(null);
    const [activeClass, setActiveClass] = useState(0);

    const updatePosition = () => {
        if(topRef.current && rightRef1.current && rightRef2.current && rightRef3.current && rightRef4.current) {
            const position = topRef.current.getBoundingClientRect().top; //distance from viewport top
            const leftPosition1 = rightRef1.current.getBoundingClientRect().top;
            const leftPosition2 = rightRef2.current.getBoundingClientRect().top;
            const leftPosition3 = rightRef3.current.getBoundingClientRect().top;
            const leftPosition4 = rightRef4.current.getBoundingClientRect().top;
            if(position >= leftPosition1 && position < leftPosition2) {
                setActiveClass(1);
            }
            else if (position >= leftPosition2 && position < leftPosition3) {
                setActiveClass(2);
            }
            else if (position >= leftPosition3 && position < leftPosition4) {
                setActiveClass(3);
            }
            else if (position >= leftPosition4) {
                setActiveClass(4);
            }
        }
    }
    useEffect(() => {
        updatePosition(); //inital
        window.addEventListener('scroll', updatePosition);

        return () => {
            window.removeEventListener('scroll', updatePosition);
        }
    }, [])


    return (
        <>
        <div className="container row justify-content-between my-5">
        <div className="col-3">
            <div id="list-example" className="left-container d-md-none d-sm-none d-none d-lg-block">
            <a href= '#list-item-1'>
            <p className={`m-0 scrollspy-text left-tab pb-3 ps-4 ${activeClass === 1 ? 'highlight-tab h4' : 'h5 text-body-secondary'}`} ref={topRef}>
                Item 1
            </p>
            </a>
            <a href= '#list-item-2'>
            <p className={`m-0 scrollspy-text left-tab py-3 ps-4 ${activeClass === 2 ? 'highlight-tab h4' : 'h5 text-body-secondary'}`}>Item 2</p>
            </a>
            <a href= '#list-item-3'>
            <p className={`m-0 scrollspy-text left-tab py-3 ps-4 ${activeClass === 3 ? 'highlight-tab h4' : 'h5 text-body-secondary'}`}>Item 3</p>
            </a>
            <a href= '#list-item-4'>
            <p className={`m-0 scrollspy-text left-tab pt-3 ps-4 ${activeClass === 4 ? 'highlight-tab h4' : 'h5 text-body-secondary'}`}>Item 4</p>
            </a>
            </div>
        </div>
        <div className="col-lg-8 col-md-12 px-0">
            <h4 className = 'text-center' id="list-item-1" ref={rightRef1}>Item 1</h4>
            <p className="scrollspy-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.
            </p>
            <h4 className = 'text-center mt-5' id="list-item-2" ref={rightRef2}>Item 2</h4>
            <p className="scrollspy-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.</p>
            <h4 className = 'text-center mt-5' id="list-item-3" ref={rightRef3}>Item 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.</p>
            <h4 className = 'text-center mt-5' id="list-item-4" ref={rightRef4}>Item 4</h4>
            <p className="scrollspy-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dui id leo venenatis, sit amet varius lectus cursus. Integer auctor est eu auctor tincidunt. Fusce malesuada, turpis et efficitur convallis, risus libero auctor libero, eget fermentum libero risus at velit. Etiam vitae ante libero, ut semper lectus.</p>
        </div>
        </div>
        </>
    )
}

export default ScrollSpyComponent