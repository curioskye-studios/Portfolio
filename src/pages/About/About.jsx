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
            My name is <span className="green fw-bold">Dayna Clare</span>, a{' '}
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

        <div className="about-logo" data-aos="fade-left" data-aos-delay="200">
          <img className="cloud-logo layer-2" src={logoLarge} />
          <img className="dashed-ring layer-1" src={borderImg}/>
        </div>
        
        <div className='about-text-wrap' data-aos="fade-up" data-aos-delay="200">         
          <div className='green-line' />
            
            <div className='about-text'>
              <p>
                More concretely, I strive to learn everything I can to improve in the{' '}
                <span className="green fw-bold">creation</span> of{' '}
                <span className="green fw-bold">intuitive</span> and{' '}
                <span className="green fw-bold">impactful user experiences</span>, using{' '}
                <span className="green fw-bold">good UI/UX design</span> and{' '}
                <span className="green fw-bold">software development principles</span>.
              </p>

              <p>
                I'm always up for the challenge to{' '}
                <span className="green fw-bold">learn something new</span> to get the job done and{' '}
                <span className="green fw-bold">produce the best results</span> for the user.
              </p>
            </div>
          
          <div className='green-line' />
        </div>

        <div className='pt-4'>    
          <Link 
            data-aos="fade-up"
            data-aos-delay="250"
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
