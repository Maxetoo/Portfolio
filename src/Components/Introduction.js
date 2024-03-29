import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { AiOutlineHome, AiOutlineArrowDown } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { SiBookmeter } from 'react-icons/si'
import ScrollImage from '../Assets/round-text.png'
import {sections} from '../Features/eventReudcer'
import { useSelector, useDispatch } from 'react-redux'
import {useScroll, motion} from 'framer-motion'
import {scrollToSection} from '../Features/eventReudcer'



// AiOutlineHome
// MdWorkOutline
// SiBookmeter

const Introduction = () => {
  sections.Introduction = useRef()
  const dispatch = useDispatch()
  const textRevealVariant = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5
      }
    }
  }

  return (
    <Wrapper>
      <div className='title--container' ref={sections.Introduction}>
        <AiOutlineHome className='title--icon' />
        <h5 className='title'>INTRODUCTION</h5>
      </div>
      <div className='intro--details'>
        Hello, my name is Maxwell Etombi and I am a{' '}
        <span className='colored--text'>Web Developer</span>
      </div>
      <motion.p 
      className='intro--desc'
      variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}

      >
        For the past two years, my focus and expertise have revolved around the creation and realization of visually stunning websites and web apllications.
      </motion.p>
      <div className="scroller-main--container">
        <div className='project-scroller--container' onClick={() => dispatch(scrollToSection(sections.Projects))}>
        <img src={ScrollImage} alt='' className='scroll--img' />
        <div className='scroll--icon'>
          <AiOutlineArrowDown />
        </div>
      </div>
      </div>
      <motion.div 
      className='profile-counter--container'
      initial={
        {
          y: 60,
          opacity: 0
        }
      }
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          staggerChildren: 0.5
        }
      }}
      viewport={{ once: false}}
      >
        <div className='years--counter'>
          <h3 className='time colored--counter'>2+</h3>
          <p className='time--desc counter--desc'>YEARS OF EXPERIENCE</p>
        </div>
        <div className='projects--counter'>
          <h3 className='projects colored--counter'>50+</h3>
          <p className='projects--desc counter--desc'>PROJECTS COMPLETED</p>
        </div>
      </motion.div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  scroll-snap-align: start;


  .title--container {
    width: auto;
    border: solid var(--section-label-border) var(--outline);
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 20px;
    font-size: 1em;
    margin-top: 4rem;
  }

  .title--icon {
    margin-right: 1rem;
  }

  .intro--details {
    margin-top: 3rem;
    font-size: 2em;
    width: 90%;
  }

  .colored--text {
    color: var(--primary);
  }

  .intro--desc {
    margin-top: 3rem;
    color: var(--outline);
    line-height: 1.5rem;
    width: 90%;
  }

  .project-scroller--container {
    height: 180px;
    width: 180px;
    border: solid 0.5px var(--outline);
    margin-top: 2rem;
    border-radius: 50%;
    cursor: pointer;
    padding: 1rem;
    position: relative;
    display: grid;
    place-content: center;
    background: var(--project-scrollbg);
  }

  .scroll--img {
    height: 100%;
    width: 100%;
    animation: animName 5s linear infinite;
  }

  @keyframes animName {
 0%{
    transform: rotate(0deg);
   }
100%{
    transform: rotate(360deg);
   }
}

  .scroll--icon {
    position: absolute;
    height: 100%;
    width: 100%;
    font-size: 2em;
    top: 40%;
    left: 40%;
    color: #ffff;
  }

  .profile-counter--container {
    margin-top: 3rem;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .profile-counter--container > div {
    width: 40%;
  }

  .colored--counter {
    color: var(--primary);
    font-size: 2.5em;
    margin-bottom: 1rem;
  }

  .counter--desc {
    color: var(--outline);
    line-height: 1.5rem;
    font-size: 0.8em;
  }

  @media only screen and (min-width: 600px) {

    margin-top: 3rem;

.title--container {
  width: 30%;
}

.intro--details {
font-size: 2.5em;
}
  }

  @media only screen and (min-width: 768px) {
    width: 90vw;

    .intro-details {
      font-size: 3em;
      
    }

    .scroller-main--container {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }

    .projects--counter {
      margin-right: 5rem;
    }
   
  }

  @media only screen and (min-width: 992px) {
    width: 70vw;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 35%;
    padding: 0px 10px;
    width: 55vw;
  }
`

export default Introduction
