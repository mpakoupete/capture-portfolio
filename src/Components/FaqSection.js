import React from 'react';
import {StyledFaq} from '../Styles';
import Toggle from './Toggle';
//import animation
import {useScroll} from './useScroll';
import {scrollAnim} from '../Pages/Animation';
import {AnimateSharedLayout} from 'framer-motion';

 
const FaqSection = () => {

    const [element, controls] = useScroll();

    return (
        <StyledFaq variants={scrollAnim} animate={controls} initial="hidden" ref={element} >
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate.</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate.</p>
                    </div>
                </Toggle>
                <Toggle title="Diferrent Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate.</p>
                    </div>
                </Toggle>
                <Toggle title="What Products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    );
}

export default FaqSection;