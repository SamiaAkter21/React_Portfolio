import React from 'react';
import './hero.css';
import scroll from '../../image/scroll.jpg';

const Hero = () => {
    return ( 
        <section id="hero" className="flex-row">
            <div className="content">
                <h1>Hi, I’m Samia Akter</h1>
                <p>I design and build things.</p>
                <a href="#about"><img src={scroll}/></a>
            </div>
        </section>
    );
}
 
export default Hero;