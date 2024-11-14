import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import arrow from '../assets/arrow.svg';
import resume from '../assets/VishnuResume.pdf';

const LandingPage = () => {
    const [typedText, setTypedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "a Full Stack Developer";
    const typingSpeed = 100;
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeProject, setActiveProject] = useState(0);
    const [showNotice, setShowNotice] = useState(true);
    const [isNoticeExpanded, setIsNoticeExpanded] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(fullText.substring(0, index + 1));
                index++;
            } else {
                setIsTypingComplete(true);
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isTypingComplete) {
            const cursorInterval = setInterval(() => {
                setShowCursor(prev => !prev);
            }, 530);

            return () => clearInterval(cursorInterval);
        }
    }, [isTypingComplete]);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setShowNotice(true);
            setTimeout(() => {
                setIsNoticeExpanded(true);
            }, 500);
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.about-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleProjectHover = (index) => {
        setActiveProject(index);
    };

        return (
        <div className="main-container" style={{ background: 'transparent' }}>
            <div 
                className="cursor-light"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`
                }}
            />
            <div 
                className={`cursor ${isClicking ? 'clicking' : ''}`}
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`
                }}
            />
            <div className="mobile-notice" style={{ display: showNotice && window.innerWidth <= 768 ? 'block' : 'none' }}>
                <div 
                    className={`notice-content ${isNoticeExpanded ? 'expanded' : ''}`}
                    onClick={() => !isNoticeExpanded && setIsNoticeExpanded(true)}
                >
                    <i className="info-icon">ⓘ</i>
                    {isNoticeExpanded && (
                        <>
                            <p>For the best experience, please view this page on a desktop, as it has been optimized for larger screens.</p>
                            <button 
                                className="notice-close" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsNoticeExpanded(false);
                                }}
                            >
                                ×
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="landing-page">
                <div className="hero-section">
                    <h1>
                        Hi! I'm <span className="gradient-text">Vishnu</span>,{' '}
                        <span className="typing-text-container">
                            {typedText}
                            <span className="blinking-cursor" aria-hidden="true">
                                {showCursor && '|'}
                            </span>
                        </span>
                    </h1>
                    <button 
                        className="scroll-down-btn" 
                        onClick={scrollToNextSection}
                        aria-label="Scroll to About section"
                    >
                        <img 
                            src={arrow}
                            className="scroll-arrow"
                            alt="Scroll down"
                        />
                    </button>
                </div>
                <div className="button-container">
                    <a 
                        href={resume}
                        className="download-btn"
                        aria-label="Download Resume"
                        download="VishnuResume.pdf"
                    >
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
            <section className="about-section">
                <h2 className="experiences-heading">Experiences</h2>
                <div className="stats-container">
                    <div className="stat-card card-green">
                        <div className="stat-number1">8+</div>
                        <div className="stat-description1">Years of UI/UX design experience</div>
                    </div>
                    
                    <div className="stat-card card-yellow">
                        <div className="stat-number2">3</div>
                        <div className="stat-description2">Full stack projects</div>
                    </div>
                    
                    <div className="stat-card card-pink">
                        <div className="stat-number3">50+</div>
                        <div className="stat-description3">Freelance clients</div>
                    </div>
                    
                    <div className="stat-card card-blue">
                        <div className="stat-number4">5</div>
                        <div className="stat-description4">AI & ML projects</div>
                    </div>
                    
                    <div className="stat-card card-purple">
                        <div className="stat-number5">GDSC</div>
                        <div className="stat-description5">Google developers students club SSET 2023 core team</div>
                    </div>
                    
                    <div className="stat-card card-indigo">
                        <div className="stat-number6">10+</div>
                        <div className="stat-description6">Leet code questions solved</div>
                    </div>
                </div>
                <div className="social-media-container">
                    <a 
                        href="https://www.linkedin.com/in/vishnu-prasad-g-28b372250/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require('../images/circle-linkedin-512.webp')}
                            alt="LinkedIn"
                            className="social-icon"
                        />
                    </a>
                    <a 
                        href="https://github.com/Vishnu1837" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require('../images/github-icon.png')}
                            alt="GitHub"
                            className="social-icon github-icon"
                        />
                    </a>
                    <a 
                        href="mailto:vishnuprasad200328@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require('../images/Gmail_icon.png')}
                            alt="Gmail"
                            className="social-icon gmail-icon"
                        />
                    </a>
                </div>
                <div className={`about-container ${isExpanded ? 'expanded' : ''}`}>
                    <h2>About</h2>
                    <p className={`about-text ${!isExpanded ? 'collapsed' : ''}`}>
                        {isExpanded ? (
                            <>
                                Hello! I'm a passionate software developer with a strong background in front-end development and a growing enthusiasm for full-stack and mobile app creation. My journey started with coding for fun and has evolved into a focus on building websites and mobile applications for my service-based business, where I strive to create impactful digital solutions that drive results.
                                <br/><br/>
                                Throughout my career, I've led projects across various domains. Whether it was guiding my GDSC chapter to new heights or leading a team at Make-A-Ton 7.0, I thrive in collaborative settings where innovation and creativity meet. I've also worked closely in my friend's digital marketing LLC for over two years, helping him grow his company by applying my technical expertise to real-world challenges.
                                <br/><br/>
                                With over five years of freelancing experience, I've developed skills in a wide array of areas—everything from video editing, mockup building, and logo design to UI design, front-end development, backend integration, and database systems. My clients span diverse industries, including e-commerce and daily driver apps, giving me a well-rounded perspective on how technology can drive business growth.
                                <br/><br/>
                                If you're looking for a dedicated developer who can bring a blend of technical skill and creative problem-solving to your team, let's connect!
                            </>
                        ) : (
                            "I'm a passionate software developer with a solid front-end foundation and growing skills in full-stack and mobile development. With 5+ years in freelancing, I've tackled projects in video editing, UI/UX, backend systems, and more, for clients across e-commerce and app industries. From leading teams at Hackathons to helping grow a digital marketing LLC, I bring a blend of technical expertise and creative problem-solving to every project."
                        )}
                    </p>
                    <button 
                        className="read-more-btn" 
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Read Less ↗' : 'Read More ↗'}
                    </button>
                </div>
            </section>
            <section className="projects-section">
                <h2 className="projects-heading">Project Showcase</h2>
                <div className="project-showcase">
                    <div className="project-carousel">
                        <div 
                            className="project-card"
                            onMouseEnter={() => handleProjectHover(0)}
                            onMouseLeave={() => handleProjectHover(null)}
                        >
                            <img src={require('../images/project1.png')} alt="Project 1" />
                            <button 
                                className="view-all"
                                onClick={() => {/* Add your action here */}}
                            >
                                View All ↗
                            </button>
                        </div>
                        <div 
                            className="project-card"
                            onMouseEnter={() => handleProjectHover(1)}
                            onMouseLeave={() => handleProjectHover(null)}
                        >
                            <img src={require('../images/project2.png')} alt="Project 2" />
                            <button 
                                className="view-all"
                                onClick={() => {/* Add your action here */}}
                            >
                                View All ↗
                            </button>
                        </div>
                        <div 
                            className="project-card"
                            onMouseEnter={() => handleProjectHover(2)}
                            onMouseLeave={() => handleProjectHover(null)}
                        >
                            <img src={require('../images/project3.png')} alt="Project 3" />
                            <button 
                                className="view-all"
                                onClick={() => {/* Add your action here */}}
                            >
                                View All ↗
                            </button>
                        </div>
                    </div>
                    <div className="carousel-dots">
                        <span className={`dot ${activeProject === 0 ? 'active' : ''}`}></span>
                        <span className={`dot ${activeProject === 1 ? 'active' : ''}`}></span>
                        <span className={`dot ${activeProject === 2 ? 'active' : ''}`}></span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
