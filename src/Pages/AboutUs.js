import React from 'react';
import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import FaqSection from '../Components/FaqSection';


const AboutUs = () => {
    return (
        <div className="aboutus">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </div>
    );
}

export default AboutUs;