import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

// IMAGES — replace these imports with your actual image files:
// import heroCloud from '../assets/hero-cloud.png';   // The cloud with glasses image

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="home sky-bg">
      <div className="home-content">
        {/* Left: Text */}
        <div className="home-text" data-aos="fade-right" data-aos-delay="100">
          <h1 className="home-headline">
            <span className="green">Welcome.</span> You've<br />
            Arrived At<br />
            <span className="green">CurioSkye<br />Studios.</span>
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

          <div data-aos="fade-up" data-aos-delay="550">
            <Link to="/portfolio" className="btn-primary home-cta">
              Explore Featured Work →
            </Link>
          </div>
        </div>

        {/* Right: Rotating Cloud Hero */}
        <div className="home-hero-right" data-aos="fade-left" data-aos-delay="200">
          <div className="dashed-ring">
            <div className="cloud-center">
              {/*
                Replace the placeholder below with your cloud+glasses image:
                <img src={heroCloud} alt="CurioSkye Studios mascot" className="cloud-img" />
              */}
              <div className="cloud-placeholder">
                <span style={{ fontSize: 80 }}>☁️</span>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -20%)',
                  fontSize: 36
                }}>👓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
