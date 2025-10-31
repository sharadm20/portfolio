import React, { useState, useEffect } from 'react';
import './assets/css/style.css';
import './assets/css/cimplic-theme.css';

const App = () => {
  const [activePage, setActivePage] = useState('about');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [theme, setTheme] = useState('dark-theme');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [formState, setFormState] = useState({
    fullname: '',
    email: '',
    message: '',
    submitting: false
  });

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Sentiment Analysis ML',
      category: 'ai/ml',
      image: '/assets/images/project-1.jpg',
      description: 'Python, Machine Learning',
      link: 'https://github.com/sharadm20/sentiment-ml'
    },
    {
      id: 2,
      title: 'Spring Boot OAuth2 Social Login',
      category: 'backend',
      image: '/assets/images/project-2.png',
      description: 'Java, Spring Boot, React',
      link: 'https://github.com/sharadm20/spring-boot-react-oauth2-social-login-demo'
    },
    {
      id: 3,
      title: 'ReactJS Interview Questions',
      category: 'frontend',
      image: '/assets/images/project-3.jpg',
      description: 'JavaScript, React',
      link: 'https://github.com/sharadm20/reactjs-interview-questions'
    },
    {
      id: 4,
      title: 'AI Engineering',
      category: 'ai/ml',
      image: '/assets/images/project-4.png',
      description: 'Jupyter Notebook, AI',
      link: 'https://github.com/sharadm20/ai_engineering'
    },
    {
      id: 5,
      title: 'Cinema Microservice',
      category: 'backend',
      image: '/assets/images/project-5.png',
      description: 'Microservices',
      link: 'https://github.com/sharadm20/cinema-microservice'
    },
    {
      id: 6,
      title: 'Flutter Application',
      category: 'frontend',
      image: '/assets/images/project-6.png',
      description: 'Dart, Flutter',
      link: 'https://github.com/sharadm20/flutter-app'
    },
    {
      id: 7,
      title: 'Jersey Spring Hibernate Project',
      category: 'backend',
      image: '/assets/images/project-7.png',
      description: 'Java, Spring, Hibernate',
      link: 'https://github.com/sharadm20/Jersey-Spring-Hibernate-Project'
    }
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      title: 'Generative AI Advance Fine-tuning for LLMs',
      category: 'AI/ML',
      date: 'Sep 2025',
      description: 'IBM certified course on advanced fine-tuning techniques for Large Language Models.',
      image: '/assets/images/blog-1.jpg'
    },
    {
      id: 2,
      title: 'Generative AI Engineering and Fine-tuning Transformers',
      category: 'AI/ML',
      date: 'Aug 2025',
      description: 'IBM certified course on engineering and fine-tuning transformer models for generative AI.',
      image: '/assets/images/blog-2.jpg'
    },
    {
      id: 3,
      title: 'Deep Learning with PyTorch',
      category: 'AI/ML',
      date: 'Jul 2025',
      description: 'United Latino Students Association certified course on implementing deep learning models using PyTorch.',
      image: '/assets/images/blog-3.jpg'
    },
    {
      id: 4,
      title: 'Prompt Engineering for ChatGPT',
      category: 'AI/ML',
      date: 'Jul 2023',
      description: 'Vanderbilt University certified course on effective prompt engineering techniques for ChatGPT.',
      image: '/assets/images/blog-4.jpg'
    },
    {
      id: 5,
      title: 'Core Java',
      category: 'Programming',
      date: 'May 2013',
      description: 'Bharat Sanchar Nigam Limited certified course on Core Java programming concepts.',
      image: '/assets/images/blog-5.jpg'
    },
    {
      id: 6,
      title: 'Android Development',
      category: 'Mobile Development',
      date: 'Jul 2012',
      description: 'HP certified course on Android application development fundamentals.',
      image: '/assets/images/blog-6.jpg'
    }
  ];

  // Tech stack data
  const techStack = [
    {
      id: 1,
      name: 'Java',
      icon: '/assets/images/icon-dev.svg',
      description: 'Expertise in Core Java, Spring, Spring Boot, Hibernate, and microservices development.'
    },
    {
      id: 2,
      name: 'Python',
      icon: '/assets/images/icon-design.svg',
      description: 'Experience with data processing, machine learning, AI/ML, and web development using Python.'
    },
    {
      id: 3,
      name: 'JavaScript/TypeScript',
      icon: '/assets/images/icon-app.svg',
      description: 'Frontend development with React, Node.js backend development, and full-stack applications.'
    },
    {
      id: 4,
      name: 'AI/ML & Generative AI',
      icon: '/assets/images/icon-photo.svg',
      description: 'Advanced expertise in LLM fine-tuning, transformers, deep learning, and prompt engineering.'
    }
  ];

  // Recent projects data
  const recentProjects = [
    {
      id: 1,
      name: 'Sentiment Analysis ML Project',
      image: '/assets/images/project-1.jpg',
      link: 'https://github.com/sharadm20/sentiment-ml'
    },
    {
      id: 2,
      name: 'Spring Boot OAuth2 Social Login',
      image: '/assets/images/project-2.png',
      link: 'https://github.com/sharadm20/spring-boot-react-oauth2-social-login-demo'
    },
    {
      id: 3,
      name: 'ReactJS Interview Questions',
      image: '/assets/images/project-3.jpg',
      link: 'https://github.com/sharadm20/reactjs-interview-questions'
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(prevState => ({ ...prevState, submitting: true }));

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
        // Reset form
        setFormState({
          fullname: '',
          email: '',
          message: '',
          submitting: false
        });
      } else {
        const result = await response.json();
        if (result.errors) {
          alert(result.errors.map(error => error.message).join(', '));
        } else {
          alert('There was a problem sending your message. Please try again.');
        }
        setFormState(prevState => ({ ...prevState, submitting: false }));
      }
    } catch (error) {
      alert('There was a problem sending your message. Please try again.');
      setFormState(prevState => ({ ...prevState, submitting: false }));
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light-theme');
    }
  }, []);

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="App">
      <main>
        <aside className={`sidebar ${sidebarExpanded ? 'active' : ''}`} data-sidebar>
          <div className="sidebar-info">
            <figure className="avatar-box">
              <img src="/assets/images/avatar-1.png" alt="Sharad Mishra" width="80" />
            </figure>

            <div className="info-content">
              <h1 className="name" title="Sharad Mishra">Sharad Mishra</h1>
              <p className="title">Software Engineer</p>
            </div>

            <button className="info_more-btn" data-sidebar-btn onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span>{sidebarExpanded ? 'Hide Contacts' : 'Show Contacts'}</span>
              <ion-icon name={sidebarExpanded ? 'chevron-up' : 'chevron-down'}></ion-icon>
            </button>
          </div>

          <div className="sidebar-info_more">
            <div className="separator"></div>

            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a href="mailto:sharad.mishra20@gmail.com" className="contact-link">sharad.mishra20@gmail.com</a>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone</p>
                  <a href="tel:+918859880033" className="contact-link">+91 88598 80033</a>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sharad-mishra-1847738b/" className="contact-link" target="_blank">linkedin.com/in/sharad-mishra</a>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Pune, Maharashtra, India</address>
                </div>
              </li>
            </ul>

            <div className="separator"></div>

            <ul className="social-list">
              <li className="social-item">
                <a href="https://github.com/sharadm20" className="social-link" target="_blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>

              <li className="social-item">
                <a href="https://www.linkedin.com/in/sharad-mishra-1847738b/" className="social-link" target="_blank">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

              <li className="social-item">
                <a href="https://twitter.com/sharadm20" className="social-link" target="_blank">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li className="social-item">
                <button id="theme-toggle" className="social-link" onClick={toggleTheme}>
                  <ion-icon name={theme === 'dark-theme' ? 'moon-outline' : 'sunny-outline'} id="theme-icon"></ion-icon>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <div className="main-content">
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button 
                  className={`navbar-link ${activePage === 'about' ? 'active' : ''}`} 
                  onClick={() => setActivePage('about')}
                >
                  About
                </button>
              </li>

              <li className="navbar-item">
                <button 
                  className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`} 
                  onClick={() => setActivePage('resume')}
                >
                  Resume
                </button>
              </li>

              <li className="navbar-item">
                <button 
                  className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`} 
                  onClick={() => setActivePage('portfolio')}
                >
                  Projects
                </button>
              </li>

              <li className="navbar-item">
                <button 
                  className={`navbar-link ${activePage === 'certification' ? 'active' : ''}`} 
                  onClick={() => setActivePage('certification')}
                >
                  Certification
                </button>
              </li>

              <li className="navbar-item">
                <button 
                  className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`} 
                  onClick={() => setActivePage('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {activePage === 'about' && (
            <article className="about active" data-page="about" style={{display: 'block'}}>
              <header>
                <h2 className="h2 article-title">About me</h2>
              </header>

              <section className="about-text">
                <p>
                  I'm an Innovative software engineer with a proven track record of developing robust and scalable solutions. 
                  I enjoy solving complex problems and building efficient, maintainable software systems.
                </p>

                <p>
                  My expertise spans multiple technologies and domains, from backend development to machine learning and AI. 
                  I focus on creating high-quality solutions that meet business needs while maintaining clean, efficient code.
                </p>
              </section>

              <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>

                <ul className="service-list">
                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src="/assets/images/icon-dev.svg" alt="Software development icon" width="40" />
                    </div>
                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Software Development</h4>
                      <p className="service-item-text">
                        Building robust and scalable software solutions using modern technologies and best practices.
                      </p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src="/assets/images/icon-design.svg" alt="AI/ML development icon" width="40" />
                    </div>
                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">AI/ML Engineering</h4>
                      <p className="service-item-text">
                        Developing and fine-tuning generative AI models, language processing systems, and deep learning applications.
                      </p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src="/assets/images/icon-app.svg" alt="Mobile development icon" width="40" />
                    </div>
                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Mobile Development</h4>
                      <p className="service-item-text">
                        Creating cross-platform mobile applications with Flutter and native Android solutions.
                      </p>
                    </div>
                  </li>

                  <li className="service-item">
                    <div className="service-icon-box">
                      <img src="/assets/images/icon-dev.svg" alt="Backend development icon" width="40" />
                    </div>
                    <div className="service-content-box">
                      <h4 className="h4 service-item-title">Backend Development</h4>
                      <p className="service-item-text">
                        Designing and implementing secure, scalable backend systems and REST APIs.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              <section className="testimonials">
                <h3 className="h3 testimonials-title">Tech Stack</h3>

                <ul className="testimonials-list has-scrollbar">
                  {techStack.map(item => (
                    <li key={item.id} className="testimonials-item">
                      <div className="content-card">
                        <figure className="testimonials-avatar-box">
                          <img src={item.icon} alt={item.name} width="60" />
                        </figure>
                        <h4 className="h4 testimonials-item-title">{item.name}</h4>
                        <div className="testimonials-text">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="clients">
                <h3 className="h3 clients-title">Recent Projects</h3>

                <ul className="clients-list has-scrollbar">
                  {recentProjects.map(project => (
                    <li key={project.id} className="clients-item">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.image} alt={project.name} />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          )}

          {activePage === 'resume' && (
            <article className="resume" data-page="resume" style={{display: 'block'}}>
              <header>
                <h2 className="h2 article-title">Resume</h2>
              </header>

              <section className="timeline">
                <div className="title-wrapper">
                  <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                  </div>
                  <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Indian Institute of Technology, Bombay</h4>
                    <span>Graduated August 2023</span>
                    <p className="timeline-text">
                      Master's and PhD in Computer Science/Engineering with focus on AI/ML technologies.
                    </p>
                  </li>

                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">CDAC, Pune</h4>
                    <span>2016</span>
                    <p className="timeline-text">
                      Postgraduate Diploma in Advanced Computing with specialization in software development.
                    </p>
                  </li>

                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Additional Education</h4>
                    <span>2010 - 2014</span>
                    <p className="timeline-text">
                      Additional studies and training in software engineering and related technologies.
                    </p>
                  </li>
                </ol>
              </section>

              <section className="timeline">
                <div className="title-wrapper">
                  <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                  </div>
                  <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Software Engineer</h4>
                    <span>Deutsche Bank</span>
                    <p className="timeline-text">
                      Working as a software engineer focusing on developing robust and scalable solutions.
                    </p>
                  </li>

                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Software Development Experience</h4>
                    <span>6.2 years</span>
                    <p className="timeline-text">
                      Over 6 years of experience in software development with expertise in multiple technologies.
                    </p>
                  </li>

                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Technical Specialist</h4>
                    <span>Various Roles</span>
                    <p className="timeline-text">
                      Experience in backend development, mobile applications, AI/ML, and system architecture.
                    </p>
                  </li>
                </ol>
              </section>

              <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                  <li className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">Java</h5>
                      <data value="90">90%</data>
                    </div>
                    <div className="skill-progress-bg">
                      <div className="skill-progress-fill" style={{ width: '90%' }}></div>
                    </div>
                  </li>

                  <li className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">Python</h5>
                      <data value="85">85%</data>
                    </div>
                    <div className="skill-progress-bg">
                      <div className="skill-progress-fill" style={{ width: '85%' }}></div>
                    </div>
                  </li>

                  <li className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">AI/ML & Generative AI</h5>
                      <data value="80">80%</data>
                    </div>
                    <div className="skill-progress-bg">
                      <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                    </div>
                  </li>

                  <li className="skills-item">
                    <div className="title-wrapper">
                      <h5 className="h5">JavaScript/TypeScript</h5>
                      <data value="75">75%</data>
                    </div>
                    <div className="skill-progress-bg">
                      <div className="skill-progress-fill" style={{ width: '75%' }}></div>
                    </div>
                  </li>
                </ul>
              </section>
            </article>
          )}

          {activePage === 'portfolio' && (
            <article className="portfolio" data-page="portfolio" style={{display: 'block'}}>
              <header>
                <h2 className="h2 article-title">Projects</h2>
              </header>

              <section className="projects">
                <ul className="filter-list">
                  <li className="filter-item">
                    <button 
                      className={selectedFilter === 'all' ? 'active' : ''} 
                      onClick={() => setSelectedFilter('all')}
                    >
                      All
                    </button>
                  </li>
                  <li className="filter-item">
                    <button 
                      className={selectedFilter === 'ai/ml' ? 'active' : ''} 
                      onClick={() => setSelectedFilter('ai/ml')}
                    >
                      AI/ML
                    </button>
                  </li>
                  <li className="filter-item">
                    <button 
                      className={selectedFilter === 'backend' ? 'active' : ''} 
                      onClick={() => setSelectedFilter('backend')}
                    >
                      Backend
                    </button>
                  </li>
                  <li className="filter-item">
                    <button 
                      className={selectedFilter === 'frontend' ? 'active' : ''} 
                      onClick={() => setSelectedFilter('frontend')}
                    >
                      Frontend
                    </button>
                  </li>
                </ul>

                <div className="filter-select-box">
                  <button className="filter-select">
                    <div className="select-value">Select category</div>
                    <div className="select-icon">
                      <ion-icon name="chevron-down"></ion-icon>
                    </div>
                  </button>

                  <ul className="select-list">
                    <li className="select-item">
                      <button onClick={() => setSelectedFilter('all')}>All</button>
                    </li>
                    <li className="select-item">
                      <button onClick={() => setSelectedFilter('ai/ml')}>AI/ML</button>
                    </li>
                    <li className="select-item">
                      <button onClick={() => setSelectedFilter('backend')}>Backend</button>
                    </li>
                    <li className="select-item">
                      <button onClick={() => setSelectedFilter('frontend')}>Frontend</button>
                    </li>
                  </ul>
                </div>

                <ul className="project-list">
                  {filteredProjects.map(project => (
                    <li 
                      key={project.id} 
                      className={`project-item active ${selectedFilter === 'all' || project.category === selectedFilter ? '' : 'hidden'}`}
                      data-filter-item 
                      data-category={project.category}
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <figure className="project-img">
                          <div className="project-item-icon-box">
                            <ion-icon name="eye-outline"></ion-icon>
                          </div>
                          <img src={project.image} alt={project.title} loading="lazy" />
                        </figure>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-category">{project.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          )}

          {activePage === 'certification' && (
            <article className="blog" data-page="blog" style={{display: 'block'}}>
              <header>
                <h2 className="h2 article-title">Certification</h2>
              </header>

              <section className="blog-posts">
                <ul className="blog-posts-list">
                  {certifications.map(cert => (
                    <li key={cert.id} className="blog-post-item">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <figure className="blog-banner-box">
                          <img src={cert.image} alt={cert.title} loading="lazy" />
                        </figure>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <p className="blog-category">{cert.category}</p>
                            <span className="dot"></span>
                            <time dateTime={cert.date}>{cert.date}</time>
                          </div>
                          <h3 className="h3 blog-item-title">{cert.title}</h3>
                          <p className="blog-text">
                            {cert.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          )}

          {activePage === 'contact' && (
            <article className="contact" data-page="contact" style={{display: 'block'}}>
              <header>
                <h2 className="h2 article-title">Contact</h2>
              </header>

              <section className="mapbox" data-mapbox>
                <figure>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                    width="400"
                    height="300"
                    loading="lazy"
                    title="map"
                  ></iframe>
                </figure>
              </section>

              <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form onSubmit={handleSubmit} className="form" data-form>
                  <div className="input-wrapper">
                    <input 
                      type="text" 
                      name="fullname" 
                      className="form-input" 
                      placeholder="Full name" 
                      value={formState.fullname}
                      onChange={handleInputChange}
                      required 
                    />
                    <input 
                      type="email" 
                      name="email" 
                      className="form-input" 
                      placeholder="Email address" 
                      value={formState.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <textarea 
                    name="message" 
                    className="form-input" 
                    placeholder="Your Message" 
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>

                  <button className="form-btn" type="submit" disabled={formState.submitting}>
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>{formState.submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </section>
            </article>
          )}
        </div>
      </main>

      <div className={`modal-container ${modalOpen ? 'active' : ''}`} data-modal-container>
        <div className="overlay" data-overlay onClick={() => setModalOpen(false)}></div>
        
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn onClick={() => setModalOpen(false)}>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          {selectedTestimonial && (
            <>
              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} width="80" data-modal-img />
                </figure>
                <img src="/assets/images/icon-quote.svg" alt="quote icon" />
              </div>

              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title>{selectedTestimonial.name}</h4>
                <time dateTime={selectedTestimonial.date}>{selectedTestimonial.date}</time>
                <div data-modal-text>
                  <p>{selectedTestimonial.text}</p>
                </div>
              </div>
            </>
          )}
        </section>
      </div>

      {/* Ionicons script */}
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default App;