import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import arrow from '../assets/arrow.svg';
import resume from '../assets/resume.pdf';

const LandingPage = () => {
    const [typedText, setTypedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "a Full Stack Developer";
    const typingSpeed = 100;
    const [isExpanded, setIsExpanded] = useState(false);

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

    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.about-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="main-container" style={{ background: 'transparent' }}>
            <div className="landing-page">
                <div className="hero-section">
                    <h1>
                        Hi! I'm <span className="gradient-text">Vishnu</span>,{' '}
                        <span style={{ display: 'inline-block', minWidth: '250px', textAlign: 'left', whiteSpace: 'nowrap' }}>
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
                        download="YourName_Resume.pdf"
                        className="download-btn"
                        aria-label="Download Resume"
                    >
                        Download Resume
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
            <section className="projects-section" style={{ background: 'transparent' }}>
                <h2>Projects</h2>
            </section>
        </div>
    );
};

export default LandingPage;
