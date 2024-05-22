// frontend/src/components/Footer.js

import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        // Function to check if the footer is in view
        const isFooterInView = () => {
            const footer = document.querySelector('.footer');
            const footerPosition = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // If the footer is in view (within 50 pixels from the bottom of the window), add the 'show' class
            if (footerPosition < windowHeight - 50) {
                setShowFooter(true);
            }
        };

        // Add event listener to check if the footer is in view when scrolling
        window.addEventListener('scroll', isFooterInView);

        // Cleanup function to remove the event listener when component is unmounted
        return () => {
            window.removeEventListener('scroll', isFooterInView);
        };
    }, []);

    return (
        <footer className={`footer ${showFooter ? 'show' : ''}`}>
            <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
            <p>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"> Twitter</a>
            </p>
        </footer>
    );
};

export default Footer;
