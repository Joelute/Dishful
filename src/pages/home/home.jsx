import { useState } from 'react'
import RecipeCard from './component/RecipeCard'
import FeatureCard from './component/FeaturedCard'
import { RecipeDataModule } from '../../Utils/RecipeData'
import { FeatureDataModule } from '../../Utils/FeatureData'
import { VegetarianData } from '../../Utils/VegetarianData'
import { HighProteinData } from '../../Utils/HighProteinData'
import styled, { keyframes } from 'styled-components'

function Home() {

  const [featureData, setFeatureData] = useState(FeatureDataModule)
  const [recipeData, setRecipeData] = useState(RecipeDataModule)
  let index = 0;

  const featureElement = featureData.recipes.map(recipe => {
    
    return(
      <FeatureCard img={recipe.image} title = {recipe.title} serveTime = {recipe.readyInMinutes} description = {recipe.summary}/>
    )
  })

  const recipeElement = recipeData.recipes.map(recipe => {
    index++
    return (
      <RecipeCard img={recipe.image} title = {recipe.title} serveTime = {recipe.readyInMinutes} index={index}/>
    )
  })

  const vegetarianElement = VegetarianData.results.map(recipe => {
    index++
    return(
      <RecipeCard img={recipe.image} title = {recipe.title} serveTime = {recipe.readyInMinutes} index={index}/>
    )
  })

  const highProteinElement = HighProteinData.results.map(recipe => {
    index++
    return(
      <RecipeCard img={recipe.image} title = {recipe.title} serveTime = {recipe.readyInMinutes} index={index}/>
    )
  })

  return (
    <Container>

      <FeatureContainer>
        <FeatureMover>
          {featureElement}
        </FeatureMover>
      </FeatureContainer>

      <CatagoryContainer>
        <CatagoryName>Recommended For You</CatagoryName>
        <RecipeScroller>
          {recipeElement}
        </RecipeScroller>
      </CatagoryContainer>
      
      <CatagoryContainer>
        <CatagoryName>Vegetarian</CatagoryName>
        <RecipeScroller>
          {vegetarianElement}
        </RecipeScroller>
      </CatagoryContainer>
      
      <CatagoryContainer>
        <CatagoryName>High Protein Diet</CatagoryName>
        <RecipeScroller>
          {highProteinElement}
        </RecipeScroller>
      </CatagoryContainer>
      
    </Container>
  )
}

export default Home

const slideFeature = keyframes`
  0%, 30%, 100% { 
    right: 0;
  }
  33%, 63% { 
    right: 100%; 
  }
  66%, 97% {
    right: 200%; 
  }
`

const Container = styled.div`
  margin: 0 auto;

  @media (min-width: 851px) {
    width: 80%;
  }

  @media (min-width: 801px) and (max-width: 850px) {
    width: 95%
  }
`

const RecipeScroller = styled.div`
  display:flex;
  overflow: scroll;
  overflow-y : hidden;
  justify-content: space-between;
  padding 1em 0;
`

const FeatureContainer = styled.div`
  width: 100%;
  overflow:hidden;
  height:100%;

  @media (min-width:801px) {
    margin: 6em 0;
  }
`

const FeatureMover = styled.div`
  display:flex;
  position: relative;
  top: 0; 
  right: 0;
  animation: ${slideFeature} linear 15s infinite; 

  :hover { 
    animation-play-state: paused; 
  }
`

const CatagoryContainer = styled.div`
  @media (min-width:801px) {
    margin: 3em 0;
  }
`

const CatagoryName = styled.h1`
  margin: 0 .1em;
`
