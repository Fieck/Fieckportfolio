// src/pages/Contact.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Header />
            <main>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
