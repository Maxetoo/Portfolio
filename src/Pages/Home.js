import React from 'react'
import styled from 'styled-components'
import {
  HomeHeader,
  HomeIntro,
  HomeProfile,
  Introduction,
  About,
  Projects,
  Articles,
  Contact,
} from '../Components/Home'

const Home = () => {
  return (
    <Wrapper>
      <HomeProfile />
      <Introduction />
      <About />
      {/* <Projects />
      <Articles />
      <Contact /> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default Home
