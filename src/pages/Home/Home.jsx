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
            I'm a <span className="green">UI/UX Designer</span> with{' '}
            <span className="green">Developer Insight</span>.
          </p>

          <p className="home-sub" data-aos="fade-right" data-aos-delay="450">
            That means my designs are more 
            <span className="green"> intentional</span>,
            <span className="green"> practical </span> and
            <span className="green"> feasible</span>.
            Just work that ships, informed by 
            <span className="green"> real experience </span> 
            building interfaces. 
          </p>

          <div className="home-cta" data-aos="fade-up" data-aos-delay="550">            
            <p className="home-sub fw bold">
              Curious? Take a look!
            </p>

            <ArrowButton linkPath="/gallery" > 
                Explore Featured Work 
            </ArrowButton>
          </div>

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
