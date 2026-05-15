import { useEffect } from 'react';

// IMAGES — import your project detail images here:
// import lumoNoteDetail from '../assets/lumonate-detail.png';
// import quickWashDetail from '../assets/quickwash-detail.png';

const PROJECT_DATA = {
  lumonote: {
    title: 'LumoNote.',
    subtitle: 'Mobile Application',
    tags: ['Tool', 'Figma', 'UI Design', 'User Research'],
    description: `LumoNote is a robust but simple note-taking mobile application designed with the user experience at its core. The app focuses on delivering a clean, intuitive interface that makes capturing thoughts and ideas effortless.\n\nThe design process involved extensive user research to understand how people interact with note-taking apps daily, resulting in a streamlined experience that balances powerful features with simplicity.`,
    // img: lumoNoteDetail,
    img: null,
    imgPlaceholder: { bg: '#F5C518', label: 'LumoNote.' },
  },
  quickwash: {
    title: 'QuickWash',
    subtitle: 'Desktop Application',
    tags: ['Tool', 'Figma', 'UI Design', 'User Research'],
    description: `QuickWash is a laundry appointment scheduling system designed to make booking laundry services as simple and stress-free as possible. The desktop application provides an intuitive interface for both customers and service providers.\n\nThe design prioritizes ease of use, ensuring that users of all technical backgrounds can navigate the system confidently and book appointments in just a few clicks.`,
    // img: quickWashDetail,
    img: null,
    imgPlaceholder: { bg: '#ffffff', label: 'QuickWash' },
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECT_DATA[id];

  useEffect(() => {
    document.title = '[Project Name] | CurioSkye Studios';
    AOS.init({ duration: 700, once: true });
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-detail sky-bg">
        <div className="detail-inner">
          <h1 style={{ color: 'white' }}>Project not found.</h1>
          <Link to="/portfolio" className="btn-primary" style={{ marginTop: 24 }}>← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail sky-bg">
      <div className="detail-inner">
        {/* Breadcrumb */}
        <nav className="breadcrumb" data-aos="fade-down">
          <Link to="/portfolio">Portfolio</Link>
          <span>›</span>
          <span>{project.subtitle}</span>
          <span>›</span>
          <span className="green">{project.title}</span>
        </nav>

        {/* Header */}
        <div className="detail-header" data-aos="fade-up" data-aos-delay="100">
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-tags">
            {project.tags.map(tag => (
              <span key={tag} className="detail-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="detail-description" data-aos="fade-up" data-aos-delay="200">
          {project.description.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Project Image */}
        <div className="detail-img-wrap" data-aos="fade-up" data-aos-delay="300">
          {project.img ? (
            <img src={project.img} alt={project.title} className="detail-img" />
          ) : (
            <div
              className="detail-img-placeholder"
              style={{ background: project.imgPlaceholder.bg }}
            >
              <span style={{
                fontFamily: 'Nunito',
                fontWeight: 900,
                fontSize: '2rem',
                color: project.imgPlaceholder.bg === '#ffffff' ? '#1a4a7a' : '#1a1a1a'
              }}>
                {project.imgPlaceholder.label}
              </span>
              <p style={{
                color: project.imgPlaceholder.bg === '#ffffff' ? '#1a4a7a' : '#1a1a1a',
                marginTop: 12, fontSize: '0.85rem', opacity: 0.7
              }}>
                Replace with your project image
              </p>
            </div>
          )}
        </div>

        <Link to="/portfolio" className="btn-primary back-btn" data-aos="fade-up" data-aos-delay="400">
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
