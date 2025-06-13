import './count.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Count() {
    const[ref1, inView1] = useInView({ triggerOnce : true })
    const[ref2, inView2] = useInView({ triggerOnce : true })
    const[ref3, inView3] = useInView({ triggerOnce : true })
    const[ref4, inView4] = useInView({ triggerOnce : true })

  return (
    <section className='container-fluid d-flex justify-content-center align-items-center py-5' id = 'count-container'>
            <div className="row justify-content-center">
            <p className = 'h2 count-text col-md-3' id = 'head'>Our Growth at a Glance</p>
            <div class="vr p-0" id = 'vr-content'></div>
            <div className="col-md-7 row">
            <p ref = {ref1} className="h3 count-text col-md-6 col-sm">{inView1 && <CountUp end = {100} duration={2} />}+ Brand Partners</p>
            <p ref = {ref2} className="h3 count-text col-md-6 col-sm">{inView2 && <CountUp end = {1000} duration={1} />}+ Happy Clients</p>
            <p ref = {ref3} className="h3 count-text col-md-6 col-sm">{inView3 && <CountUp end = {15} duration={2} />}+ Years of Business</p>
            <p ref = {ref4} className="h3 count-text col-md-6 col-sm">Over {inView4 && <CountUp end = {6} duration={3} />} Locations</p>
            </div>
            </div>
    </section>
  )
}

export default Count