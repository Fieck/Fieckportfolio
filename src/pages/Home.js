import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faLaravel, faHtml5, faCss3Alt, faPhp, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.css';
import project1 from "../images/comingsoon.jpeg";
import project2 from "../images/comingsoon.jpeg";
import project3 from "../images/comingsoon.jpeg";


const Home = () => {
    return (
        <div className="home">
            <Header />
            <HeroSection />
            <Skills />
            <ProjectsShowcase />
            <Footer />
        </div>
    );
};

const HeroSection = () => (
    <section className="hero">
        <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Tech-savvy Web | Full Stack Developer eager to fuel your company's growth with innovative solutions. Let's team up to elevate your business to new heights.</p>
            <button className="hero-button">Explore My Work</button>
        </div>
    </section>
);


const Skills = () => (
    <section className="skills">
        <h2>Skills</h2>
        <div className="skills-marquee">
            <ul className="skills-list">
                <li><FontAwesomeIcon icon={faJava} /></li>
                <li><FontAwesomeIcon icon={faReact} /></li>
                <li><FontAwesomeIcon icon={faLaravel} /></li>
                <li><FontAwesomeIcon icon={faPhp} /></li>
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faHtml5} /></li>
                <li><FontAwesomeIcon icon={faCss3Alt} /></li>
                <li><FontAwesomeIcon icon={faFigma} /></li>
                {/* Repeat the skills to create a continuous marquee effect */}

            </ul>
        </div>
    </section>
);

const ProjectsShowcase = () => (
    <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
            <div className="project">
                <h3>Project One</h3>
                <img src={project1} alt="Project One Preview" />
                <p>A brief description of Project One.</p>
            </div>
            <div className="project">
                <h3>Project Two</h3>
                <img src={project2} alt="Project Two Preview" />
                <p>A brief description of Project Two.</p>
            </div>
            <div className="project">
                <h3>Project Three</h3>
                <img src={project3} alt="Project Three Preview" />
                <p>A brief description of Project Three.</p>
            </div>
            {/* Add more projects here */}
        </div>
    </section>
);

export default Home;
