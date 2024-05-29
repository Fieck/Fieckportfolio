// src/components/ContactForm.js
import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <p>
                    Feel free to contact me through email{' '}
                    <a href="mailto:yafiqworkissue@gmail.com">syafiqworkissue@gmail.com</a>.
                </p>
                <p>
                    We can discuss topics like web design, web development, my portfolio, or any other related subjects.
                </p>
            </div>
        </div>
    );
};

export default ContactForm;
