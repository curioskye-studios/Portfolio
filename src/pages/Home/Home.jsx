import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

import borderImg from '/logo-img-border.png';
import logoLarge from '/logo-large.png';

import ArrowButton from '../../components/Buttons/ArrowButton/ArrowButton';

export default function Home() {
  useEffect(() => {
    document.title = 'CurioSkye Studios';
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="home sky-bg">

      <div className="home-content">

        {/* Left: Text */}

        <div className="home-text" data-aos="fade-right" data-aos-delay="100">
          <h1 className="home-headline">
            <span className="green">Welcome.</span> You've
            Arrived At
            <span className="green"> CurioSkye Studios.</span>
          </h1>

          <p className="home-sub" data-aos="fade-right" data-aos-delay="250">
            My name is Dayna Clare (or commonly <span className="green">Kye</span>), and welcome
            to <span className="green">CurioSkye Studios</span>.
          </p>

          <p className="home-sub" data-aos="fade-right" data-aos-delay="350">
            I'm a very passionate and curious <span className="green">UI/UX Designer</span> and{' '}
            <span className="green">User-Centric Software Developer</span>.
          </p>

          <p className="home-sub" data-aos="fade-right" data-aos-delay="450">
            I sit at the intersection between <span className="green">technical skill</span> and{' '}
            <span className="green">design</span>, striving to create{' '}
            <span className="green">intuitive</span> and <span className="green">impactful</span>{' '}
            user experiences.
          </p>

          <ArrowButton 
            linkPath="/portfolio" className="home-cta"  
            data-aos="fade-left" data-aos-delay="550"> 
              Explore Featured Work 
          </ArrowButton>
        </div>


        {/* Right: Rotating Cloud Hero */}

        <div className="home-hero-right" data-aos="fade-left" data-aos-delay="200">
          <img className="cloud-logo layer-2" src={logoLarge} />
          <img className="dashed-ring layer-1" src={borderImg}/>
        </div>

      </div>
    </div>
  );
}
