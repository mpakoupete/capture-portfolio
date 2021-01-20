import React from 'react';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import {scrollAnim} from '../Pages/Animation';


export const useScroll = () => {
    const [element, view] = useInView({threshold : 0.5});
    const controls = useAnimation();
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
};

export const useScrollWork = () => {
    const [element, view] = useInView({threshold :0.5});
    const controls = useAnimation();
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
}