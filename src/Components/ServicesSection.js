import React from 'react';
//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//import Styles
import {StyledServices, StyledDescription, StyledImage, StyledCards, StyledCard} from '../Styles';
//import animation
import {useScroll} from './useScroll';
import {scrollAnim} from '../Pages/Animation';

const ServicesSection = () => {

    const [element, controls] = useScroll();
    return (
        <StyledServices ref={element} variants={scrollAnim} animate={controls} initial="hidden" >
            <StyledDescription>
                <h2>High <span>Quality</span> services</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="Clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt=""/>
            </StyledImage>
        </StyledServices>
    );
}

export default ServicesSection;