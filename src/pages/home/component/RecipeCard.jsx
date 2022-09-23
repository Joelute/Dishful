import styled, {keyframes} from "styled-components"

export default function RecipeCard ({img, title, serveTime, index}) {
    return (
        <Container index={index}>
            <RecipeImage img ={img}/>
            <RecipeDescription>
                <RecipeName>{title}</RecipeName>
                <RecipeServeTime>Ready in {serveTime} minutes</RecipeServeTime>
            </RecipeDescription>
            
        </Container>
    )
}

const dropDown = keyframes`
    from {
        transform: translateY(-2em);
        opacity: 0; 
    } 
    to {
        transform: translate(0);
        opacity: 100;
    }
`;

const Container = styled.a.attrs(props => ({href: '#'}))`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    border-radius: 1em;
    width: 14em;
    height: 18em;
    margin: 0 .5em;
    justify-content: space-between;
    text-decoration: none;
    color: #252525;
    top: -5em;
    opacity: 0;

    animation: 1s ${dropDown} ${props => props.index*100}ms forwards;

    :hover,
    :active {
        box-shadow: 0 0 5px 3px rgba(0, 200, 0, .5);

        h1 {
            color: rgba(0, 150, 0, .8)
        }
    }
`

const RecipeImage = styled.img.attrs(props => ({ src: props.img}))`
    min-height:10em;
    object-fit:cover;
    border-radius: 1em 1em 0 0;
`

const RecipeName = styled.h1`
    font-size: 1rem;
    padding: 0 .5em;
`

const RecipeServeTime = styled.p`
    font-size: 1rem;
    padding: 0 .5em;
    margin-bottom: .6em;
`

const RecipeDescription = styled.div`
    width:100%;
    text-align: right;
`

