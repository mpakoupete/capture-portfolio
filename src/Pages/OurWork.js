import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//import Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//importing Animations
import {motion} from 'framer-motion';
import {PageAnimation, fade, photoAnim, lineAnim, slider, slidercontainer} from './Animation';
import {useScroll} from '../Components/useScroll';
//

const OurWork = () => {

    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();

    //options of StyledMovie
    //variants={fade} animate={controls3} initial="hidden" ref={element3}

    return (
        <StyledWork variants={PageAnimation} initial="hidden" animate="show" exit="exit" style={{background: "#fff"}}>
            <motion.div variants={slidercontainer} initial="hidden" animate="show" exit="exit" >
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <StyledMovie >
                <motion.h2 variants={fade}>The athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <HideImage>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                    </HideImage>
                </Link>
            </StyledMovie>
            <StyledMovie> 
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/work/the-racer">
                        <img src={theracer} alt="theracer"/>
                    </Link>
            </StyledMovie>
            <StyledMovie >
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </StyledMovie>
        </StyledWork>
    )
}


const StyledWork = styled(motion.div)`
    min-height:100vh;
    overflow : hidden;
    padding : 3rem 7rem;

    h2 {
        padding : 1rem 0;
    }
`;

const StyledMovie = styled(motion.div)`
    padding-bottom : 10rem;
    overflow : hidden;
    .line {
        height : 0.5rem;
        background : #23d997;
        margin-bottom : 3rem;
    }
    img {
        width : 100%;
        height : 70vh;
        object-fit : cover;
    }
`;

const HideImage = styled.div`
    overflow : hidden;
`;

//Frame Animation

const Frame1 = styled(motion.div)`
    position : fixed;
    top : 10%;
    left : 0;
    width : 100%;
    height : 100vh;
    background : #fffebf;
    z-index : 2;
`;

const Frame2 = styled(Frame1)`
    background : #ff8ebf;
`;

const Frame3 = styled(Frame1)`
    background : #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background : #8effa0;
`;

export default OurWork;