import styled from 'styled-components';

//Styled Component

export const StyledAbout = styled.div`
    min-height : 90vh;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 4rem 7rem;
    color : white;
`;

export const StyledServices = styled(StyledAbout)`
    h2 {
        padding-bottom : 5rem;
    }
    p {
        width : 70%;
        padding : 2rem 0rem 4rem 0rem;
    }
`;

export const StyledFaq = styled(StyledAbout)`
    display : block;

    span {
        display : block;
    }
    h2 {
        padding-bottom : 2rem;
        font-weight : lighter;
    }
    .faq-line{
        background : #cccccc;
        height : .2rem;
        margin : 2rem 0rem;
        width : 100%;
    }
    .question {
        padding : 3rem 0rem;
        cursor : pointer;
    }
    .answer {
        padding : 2rem 0rem;
        p {
            padding : 1rem 0rem;
        }
    }
`;

export const StyledCards = styled.div`
    display : flex;
    flex-wrap : wrap;
`;

export const StyledCard = styled.div`
    flex-basis : 15rem;

    .icon {
        display: flex;
        align-items : center;

        h3 {
            background : white;
            margin-left : 1rem;
            color : black;
            padding : 1rem;
        }
    }
`;


export const StyledDescription = styled.div`
    flex : 1;
    padding-right: 3rem;
    z-index : 2;
    h2 {
        font-weight : lighter;
    }
`;

export const StyledImage = styled.div`
    flex : 1;
    overflow: hidden;
    z-index: 2;
    img {
        width : 100%;
        height : 80vh;
        object-fit : cover;
    }
`;

export const StyledHide = styled.div`
    overflow : hidden;
`;