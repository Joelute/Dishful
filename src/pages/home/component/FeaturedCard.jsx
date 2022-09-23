import styled from "styled-components";

export default function RecipeCard ({img, title, description, serveTime}) {

    const formatDescription = description.replace(/(<([^>]+)>)/ig, '')

    return (
        <Container>
            <RecipeImage img ={img}/>
            <RecipeInfo>
                <RecipeName>{title}</RecipeName>
                <RecipeDescription>{formatDescription}</RecipeDescription>
                <RecipeServeTime>Ready in {serveTime} minutes</RecipeServeTime>
            </RecipeInfo>
            
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    width: 100%;
    flex-shrink: 0;
    justify-content:space-around;
    
    @media (max-width:800px) {
        flex-direction: column;
        height: 100vh;
    }


`

const RecipeImage = styled.img.attrs(props => ({ src: props.img}))`
    width: 100%;
    object-fit:cover;
    height: 20em;
    
    @media (min-width: 801px) {
        border-radius: 1em;
        max-width: 40em;
        width:48%;
    }

    @media (max-width:800px) {
        max-height: 60%;
    }
`

const RecipeInfo = styled.div`
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 1em 0;
    margin: 0 auto;
    

    @media (min-width: 801px) {
        width:48%;
        margin: 0;
    }


    @media (min-width: 551px) and (max-width: 800px) {
        width: 70%;
    }

    @media (max-width: 550px) {
        width: 95%;
    }
    
`

const RecipeName = styled.h1`
    font-size: 1.5rem;
    font-weight:700;
`

const RecipeDescription = styled.p`
    letter-spacing: 1px;
`

const RecipeServeTime = styled.p`
    font-size: 1rem
`
