import React from 'react';
//import images
import home1 from '../img/home1.png';
//Import Framer Motion
import {motion, transform} from 'framer-motion';
import {titleAnimation, fade, photoAnim} from '../Pages/Animation'; 
//Import Styled Components
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../Styles';
//Import Wave
import Wave from './Wave';

const AboutSection = () => {

    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}> your <span>dreams</span> come</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>true</motion.h2>
                    </StyledHide>
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnim} src={home1} alt="Guy with Camera"/>
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}

export default AboutSection;