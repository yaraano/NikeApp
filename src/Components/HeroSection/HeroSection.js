import React from 'react';
import './HeroSection.scss';
import Pict from '../Assets/Group 1.png';
import bigImage from '../Assets/Pict.png'
const HeroSection = () => {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <ul className={'hero-ul'}>
                        <li>Jersey</li>
                        <li>Nike & NBA Collaboration</li>
                    </ul>
                    <div className="hero-text">
                        <h1>
                            <span>Jersey</span>
                            <img src={Pict} alt="NBA Jersey" />
                            <span>NBA</span>
                        </h1>
                    </div>
                    <div className={"hero-message"}>
                        <h2>whichever <span className={"hero-message-blue"}>nba</span> <span className={"hero-message-red"}>team</span> your support, get your jersey here today.</h2>
                    </div>
                    <div className={"hero-img"}>
                        <img src={bigImage} alt=""/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
