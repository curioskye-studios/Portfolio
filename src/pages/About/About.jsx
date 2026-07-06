import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

import borderImg from '/logo-img-border.png';
import logoLarge from '/logo-large.png';

import { Link } from 'react-router-dom';

import TalkIcon from '../../components/Icons/TalkIcon';


export default function About() {
  useEffect(() => {
    document.title = 'About | CurioSkye Studios';
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="about sky-bg">
    
      <div className="about-inner">

        <h3 className="page-label green about-letter-spacing" data-aos="fade-down">
          About Me
        </h3>
        <h1 className="about-title" data-aos="fade-up" data-aos-delay="100">
          CurioSkye Studios
        </h1>

        <div className="about-body row-adaptable" data-aos="fade-up" data-aos-delay="200">        
          <p>
            My name is <span className="green fw-bold">Dayna Clare</span>, 
            a very passionate and curious{' '}
            <span className="green fw-bold">UI/UX Designer</span> and{' '}
            <span className="green fw-bold">User-Centric Software Developer</span> working hard
            for the past 4 years. My gallery of work is represented as{' '}
            <span className="green fw-bold">CurioSkye Studios</span>.
          </p>

          <p>
            The <span className="green fw-bold">CurioSkye Studios</span> name speaks to how{' '}
            <span className="green fw-bold">I stay curious</span> in my endeavours (with the
            nickname <span className="green fw-bold">Kye</span>). I find the possibilities ahead
            of me to be as boundless as the open <span className="green fw-bold">sky</span>.
          </p>          
        </div>

        <div className="about-logo" data-aos="fade-up" data-aos-delay="200">
          <img className="cloud-logo layer-2" src={logoLarge} />
          <img className="dashed-ring layer-1" src={borderImg}/>
        </div>
        
        
        <div className='about-container row-adaptable'>

          <div className='about-text-wrap' data-aos="fade-left" data-aos-delay="200">
            
            <div className='green-line' />
            
            <div className='about-text'>    
              <div className='separator-small mobile-hidden' />
              <h5 className="fw-bold"> How is my Developer Insight helpful? </h5>

              <div className="about-info" id="insight">        
                <div className='separator-small' />
                <ul>
                  <li>
                    <p>
                    I know what's <span className="green fw-bold"> easy vs. hard to implement</span>, 
                    so there's <span className="green fw-bold"> no beautiful but impractical</span> designs.
                    </p>                  
                  </li>
                  <li>
                    <p>
                    I understand developer constraints, 
                    so there's <span className="green fw-bold">less back and forth</span> on 
                    <span className="green fw-bold"> design feasibility</span>.      
                    </p>           
                  </li>
                  <li>                    
                    <p>
                    I can prototype with <span className="green fw-bold">real code</span>, 
                    not just pretty slideshows.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>    

            <div className='green-line mobile-hidden' />      
          </div>

          <div className='separator' />

          <div className='about-text-wrap' data-aos="fade-left" data-aos-delay="200"> 
            
            <div className='green-line mobile-hidden' />

            <div className='about-text'>
              <div className='separator-small mobile-hidden' />
              <h5 className="fw-bold"> What guides my Design Process? </h5>

              <div className="about-info">                
               <div className='separator-small' />
                <ul>
                  <li>
                    <p>
                    I <span className="green fw-bold">empathize</span>. 
                    Your pain points become mine to solve.
                    </p>
                  </li>
                  <li>                    
                    <p>
                    I have <span className="green fw-bold">high standards</span>.
                    I'm always testing my designs and looking for ways to improve it.
                    </p>
                  </li>
                  <li>
                    <p>
                    I <span className="green fw-bold">communicate</span>.
                    We have <span className="green fw-bold">transparent conversations </span> 
                    to produce something we're both happy with.        
                    </p>      
                  </li>
                  <li>                    
                    <p>
                    I <span className="green fw-bold">stay curious</span>.
                    I'm always <span className="green fw-bold">asking questions </span> 
                    and exploring alternatives.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>
            
            <div className='green-line' />
          </div>

        </div>
        
        <div className='about-text-wrap'>          
          <p className='about-cta-info ps-5 pe-5 pt-4 pb-4'>              
            I'm always up for the challenge to{' '}
            <span className="green fw-bold">learn something new</span> to get the job done.
          </p>
        </div>
                   

        <div className='pt-4 pb-4'>    
          <Link 
            data-aos="fade-up"
            data-aos-delay="200"
            to="https://www.linkedin.com/in/dayna-clare-itux" 
            className="btn-primary">

            Connect With Me!

            <TalkIcon />
          </Link>
        </div>


      </div>

    </div>
  );
}
