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
      <div className="sidenav">
      <HomeProfile/>

      </div>
      <NavMenu/>
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
  scroll-snap-type: y mandatory;

  @media only screen and (min-width: 1200px) {
    .sidenav {
      height: 100vh;
      width: 35%;
      position: fixed; 
      z-index: 1; 
      top: 0; 
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      }
  }
  

`
export default Home
