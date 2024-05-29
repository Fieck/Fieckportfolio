// src/pages/About.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';


const About = () => {
    return (
        <div className="about">
            <Header />
            <Description />
            <Footer />
        </div>
    );
};

const Description = () => (
    <section className="Description">
        <div className="timeline-container">
            <h2>My Timeline</h2>
            <div className="timeline">

                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2024</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Application Developer @ Singularity Aerotech Asia Sdn. Bhd. </h3>
                        <p>I am currently employed at the same company, actively contributing to the success of our projects.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2024</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Graduated From National University Of Malaysia 👨🏻‍🎓</h3>
                        <p>After 3.5 years of study, I am now a proud graduate of National University of Malaysia with a Bachelor's degree in Software Engineering (Multimedia Systems Development) with Honours, achieving a CGPA of 3.85.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2023</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Internship @ Singularity Aerotech Asia Sdn. Bhd.</h3>
                        <p>My first internship was a valuable experience where I acquired numerous technical skills and expanded my knowledge to become a proficient full-stack developer.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2020</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Graduated from Selangor Matriculation</h3>
                        <p>Completed a one-year foundation program in the Sub Science course at Selangor Matriculation, achieving a CGPA of 3.88.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2018</span>
                    </div>
                    <div className="timeline-content">
                        <h3>Graduated Secondary School</h3>
                        <p>After completing five years of secondary school with a focus on Computer Science, I represented the school in handball and created many cherished memories during my time there.</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </section>
);

export default About;
