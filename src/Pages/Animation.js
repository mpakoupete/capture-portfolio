import {motion} from 'framer-motion';

export const PageAnimation = {
    hidden : {
        opacity : 0,
        y: 300
    },
    show : {
        opacity : 1,
        y: 0,
        transition : {
            duration : 1,
           // ease : "easeOut",
           // staggerChildren : 1,
        },
    },
    exit : {
        opacity :0,
        y : 300,
        transition : {
            duration : 1,
        }
    }
}