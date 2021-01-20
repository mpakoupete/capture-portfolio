
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

export const lineAnim = {
    hidden : {
        width : "0%",
        opacity : 0,
    },
    show : {
        width : "100%",
        opacity: 1,
        transition : {
            duration : 0.75,
            ease : "easeOut",
        },
    },
};

export const slider = {
    hidden : {
        x: '-130%',
        skew : '45deg',
    },
    show : {
        x: '100%',
        skew: '0deg',
        transition : {
            ease : 'easeOut',
            duration : 1,
        },
    },
};

export const slidercontainer = {
    hidden : {opacity :1},
    show : {opacity : 1,
        transition : {
            ease : 'easeOut',
            staggerChildren : 0.14,
        },
    },
};

export const scrollAnim = {
    hidden : {
        scale : 1.1,
        opacity : 0,
        transition : {
            duration : 0.5,
        }
    },
    show : {
        scale : 1,
        opacity : 1,
        transition : {
            duration : 0.5,
            ease : 'easeOut',
        },
    },
};