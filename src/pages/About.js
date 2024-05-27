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
                        <span>2023</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Senior Frontend Developer @ Decube</h3>
                        <p>Reimagine the UI/UX of Data Observability dashboard, and also in charge of setting up the frontend architecture, CI/CD pipelines, and also the frontend team.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2022</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Mid React Developer @ Xsolla</h3>
                        <p>Being a part of leading gaming commerce player, and me being one of the pixel builder of Xsolla, and working on Web3 technologies for NFT and Metaverse.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2021</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Application Developer @ toyyibPay (Aug)</h3>
                        <p>Malaysian payment gateway solution, one of the syariah compliant fintech company. Also one of the members behind NeoCorrad and infaqYIDE.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2020</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Full Stack Developer @ Qijang Technologies (Sept)</h3>
                        <p>An e-commerce platform, integrating Lazada, Shopee and others for omnichannel shopping experience. I was also head of two projects, in which I hope it will be launched in future.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">
                        <span>2019</span>
                        <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                        <h3>Full Stack Developer @ Qijang Technologies (Sept)</h3>
                        <p>An e-commerce platform, integrating Lazada, Shopee and others for omnichannel shopping experience. I was also head of two projects, in which I hope it will be launched in future.</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </section>
);

export default About;
