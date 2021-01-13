import React, {useState, useEffect} from 'react';
import {MovieState} from '../movieState';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
//importing Animations
import {motion} from 'framer-motion';
import {PageAnimation} from './Animation';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setmovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setmovie(currentMovie[0]);
    }, [movies, url])

    return (
        <>
        {movie && (
        <StyledDetail variants={PageAnimation} animate="show" initial="hidden" exit="exit">
            <StyledHeadline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt={movie.title}/>
            </StyledHeadline>
            <StyledAwards>
                {movie.awards.map((award) => (
                    <Award title={award.title} description={award.description} key={award.title} />
                ))}
            </StyledAwards>
            <StyledImageDisplay>
                <img src={movie.secondaryImg} alt={movie.secondaryImg} />
            </StyledImageDisplay>
        </StyledDetail>
        )}
        </>

    );
}

const StyledDetail = styled(motion.div)`
    color : white;
`;

const StyledHeadline = styled.div`
    min-height : 90vh;
    padding-top : 20vh;
    position : relative;

    h2 {
        position : absolute;
        top : 10%;
        left : 50%;
        transform : translate(-50%, -30%);
    }
    img {
        width : 100%;
        height : 70vh;
        object-fit : cover;
    }
`;

const StyledAwards = styled.div`
    min-height : 80vh;
    display: flex;
    margin : 3rem 7rem;
    align-items : center;
    justify-content : space-around;
`;

const StyledAward = styled.div`
    padding : 3rem;
    h3 {
        font-size : 1.5rem;
    }
    .line {
        width : 100%;
        background : #23d997;
        height : 0.5rem;
        margin : 1rem 0rem;
    }
    p {
        padding : 2rem 0rem;
    }
`;

const StyledImageDisplay = styled.div`
    min-height : 50vh;

    img {
        width : 100%;
        height : 100vh;
        object-fit : cover;
    }
`;

const Award = ( {title, description}) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
}


export default MovieDetail;