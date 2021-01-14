import {motion} from 'framer-motion';

export const PageAnimation = {
    hidden : {
        opacity : 0,
        y: 200
    },
    show : {
        opacity : 1,
        y: 0,
        transition : {
            duration : .4,
            when : "beforeChildren",
            ease : "easeOut",
            staggerChildren : 0.25,
        },
    },
    exit : {
        opacity :0,
        y : 300,
        transition : {
            duration : 0.5,
            eace : "easeOut"
        }
    }
};

export const titleAnimation = {
    hidden : {
        opacity : 0,
        y : 200,
    },
    show : {
        opacity : 1,
        y : 0,
        transition : {
            duration : 0.5,
            ease : 'easeOut',
        },
    },
};

export const fade = {
    hidden : {
        opacity: 0,
    },
    show : {
        opacity: 1,
        transition : {
            duration : 1,
            ease : "easeOut",
        },
    }
};

export const photoAnim = {
    hidden : {
        scale : 1.5,
        opacity : 0,
    },
    show : {
        scale : 1,
        opacity : 1,
        transition : {
            duration : 0.75,
            ease : "easeOut",
        },
    },
};