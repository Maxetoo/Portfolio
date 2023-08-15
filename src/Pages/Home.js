import React from 'react'
import styled from 'styled-components'
import {
  NavMenu,
  HomeProfile,
  Introduction,
  About,
  Projects,
  Articles,
  Contact,
} from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import {closeNavMenu} from '../Features/eventReudcer'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <NavMenu/>
      <HomeProfile/>
      <Introduction />
      <About />
      <Projects />
      <Articles />
      <Contact />
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
