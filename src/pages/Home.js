import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faLaravel, faHtml5, faCss3Alt, faPhp, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.css';
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";


const Home = () => {
    return (
        <div className="home">
            <Header />
            <HeroSection />
            <Introduction />
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
            <p>I'm a Full Stack Developer specializing in building exceptional digital experiences.</p>
            <button className="hero-button">Explore My Work</button>
        </div>
    </section>
);

const Introduction = () => (
    <section className="introduction">
        <h2>About Me</h2>
        <p>Hello! I'm [Your Name], a software engineer with a passion for developing innovative programs. I've got a knack for problem-solving and thrive in environments that challenge me.</p>
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
