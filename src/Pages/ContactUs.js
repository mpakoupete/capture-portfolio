import React from 'react';
//importing Animations
import {motion} from 'framer-motion';
import {PageAnimation} from './Animation';

const ContactUs = () => {
    return (
        <motion.div variants={PageAnimation} animate="show" initial="hidden" exit="exit" className="contactus">
            <h1>Contact Us</h1>
        </motion.div>
    )
}

export default ContactUs;