import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { category, id } = useParams();

  const capitalizer = (str) => {return str.charAt(0).toUpperCase() + str.slice(1)};

  useEffect(() => {
    document.title = `${capitalizer(category)} | ${capitalizer(id)}`;
    AOS.init({ duration: 700, once: true });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="project-detail sky-bg">
      <div className="detail-inner">

        {/* Breadcrumb */}
        <nav className="breadcrumb" data-aos="fade-down">
          <Link to="/portfolio">Portfolio</Link>
          <span>›</span>
          <span>{capitalizer(category) + " Work"}</span>
          <span>›</span>
          <span className="green">{capitalizer(id)}</span>
        </nav>

        {/* Header */}
        <div className="detail-header" data-aos="fade-up" data-aos-delay="100">

          <h1 className="detail-title">{capitalizer(id)}</h1>

          <div className="detail-tags">
            <span className="detail-tag">Tag</span>
          </div>

        </div>

        {/* Description */}
        <div className="detail-description" data-aos="fade-up" data-aos-delay="200">
          LumoNote is a feature rich note-taking mobile app. It sits in that sweet spot between a simple note-taking app and one that borders on a word processor like Microsoft Word.

          This was an exploratory project undertaken with a focus on refining my process and expanding my knowledge and skill as both a UI/UX Designer and Software Developer.
        </div>

        <Link to="/portfolio" className="btn-primary back-btn" data-aos="fade-up" data-aos-delay="400">
          ← Back to Portfolio
        </Link>

      </div>
    </div>
  );
}