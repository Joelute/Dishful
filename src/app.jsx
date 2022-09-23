import { Routes, Route, Link } from "react-router-dom"
import styled from "styled-components"
import Home from './pages/home/home'

function App() {

    return (
        <div>
            <NavBar>
                <StyledLink to='/'><StyledText>Dishful</StyledText></StyledLink>
            </NavBar>

            <Routes>
                <Route exact path='/' element={<Home />}/>
            </Routes>
        </div>
        
    )
}

export default App

const NavBar = styled.nav`
    background-color: rgba(255, 255, 255, 0);
    position: fixed;
    top:0;
    left:0;
    z-index: 1;
    width: 0%;


    &:hover {
        background-color: rgba(255, 255, 255, 100);
        width: 100%;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledText = styled.h1`
    color: black;
    font-family: 'Fredoka One', cursive;
    letter-spacing: 2px;
    font-size: 2rem;
`