import React from 'react';
import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import FaqSection from '../Components/FaqSection';
//importing Animations
import {motion} from 'framer-motion';
import {PageAnimation} from './Animation';


const AboutUs = () => {
    return (
        <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit" className="aboutus">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUs;