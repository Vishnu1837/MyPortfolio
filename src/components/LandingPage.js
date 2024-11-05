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
            <div className="corner-bl" aria-hidden="true"></div>
            <div className="corner-br" aria-hidden="true"></div>
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
            </div>
            <section className="about-section" style={{ background: 'transparent' }}>
                <h2>About Me</h2>
            </section>
            <section className="projects-section" style={{ background: 'transparent' }}>
                <h2>Projects</h2>
            </section>
            {/* Other sections */}
        </div>
    );
};

export default LandingPage;
