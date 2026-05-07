import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';

// IMAGES — replace these imports with your actual project screenshots:
// import lumoNoteImg from '../assets/lumonate.png';
// import quickWashImg from '../assets/quickwash.png';
// import softwareProject1 from '../assets/software-project1.png';

const PROJECTS = {
  design: [
    {
      id: 'lumonate',
      type: 'Mobile Application',
      title: 'A Robust But Simple Note-Taking Mobile App.',
      // img: lumoNoteImg,  // ← swap placeholder for your import
      img: null,
      imgPlaceholder: { bg: '#F5C518', label: 'LumoNote.' },
      link: '/portfolio/lumonate',
    },
    {
      id: 'quickwash',
      type: 'Desktop Application',
      title: 'An Easy To Use Laundry Appointment Scheduling System.',
      // img: quickWashImg,
      img: null,
      imgPlaceholder: { bg: '#ffffff', label: 'QuickWash' },
      link: '/portfolio/quickwash',
    },
  ],
  software: [
    // Add your software projects here following the same shape
  ],
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('design');

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="portfolio sky-bg">
      <div className="portfolio-inner">
        <p className="section-label green" data-aos="fade-down">P o r t f o l i o</p>
        <h1 className="portfolio-title" data-aos="fade-up" data-aos-delay="100">
          Welcome To The{' '}
          <span className="green">CurioSkye<br />Studios</span> Gallery.
        </h1>
        <p className="portfolio-sub" data-aos="fade-up" data-aos-delay="200">
          Feel free to take a look around!
        </p>

        {/* Tabs */}
        <div className="portfolio-tabs" data-aos="fade-up" data-aos-delay="300">
          <button
            className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
            onClick={() => setActiveTab('design')}
          >
            UI/UX Design Work
          </button>
          <button
            className={`tab-btn ${activeTab === 'software' ? 'active' : ''}`}
            onClick={() => setActiveTab('software')}
          >
            Software Dev Work
          </button>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {PROJECTS[activeTab].length === 0 && (
            <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', gridColumn: '1/-1' }}>
              Projects coming soon!
            </p>
          )}
          {PROJECTS[activeTab].map((project, i) => (
            <div
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={100 * (i + 1)}
            >
              {/* Project Image */}
              <div className="project-img-wrap">
                {project.img ? (
                  <img src={project.img} alt={project.title} className="project-img" />
                ) : (
                  <div
                    className="project-img-placeholder"
                    style={{ background: project.imgPlaceholder.bg }}
                  >
                    <span style={{
                      fontFamily: 'Nunito',
                      fontWeight: 900,
                      fontSize: '1.4rem',
                      color: project.imgPlaceholder.bg === '#ffffff' ? '#1a4a7a' : '#1a1a1a'
                    }}>
                      {project.imgPlaceholder.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="project-body">
                <span className="project-type-badge">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <Link to={project.link} className="btn-primary project-btn">
                  Dive Into Design →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
