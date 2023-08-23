import React, {useRef} from 'react'
import styled from 'styled-components'
import { AiOutlineUser } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import {sections} from '../Features/eventReudcer'
import {useScroll, motion} from 'framer-motion'


const About = () => {
  const { navMenuOpen} = useSelector((store) => store.eventSlice)
  sections.About = useRef()

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



    return ( <Wrapper>
        <div className = 'title--container'  ref={sections.About}>
        <AiOutlineUser className = 'title--icon' />
        <h5 className = 'title' > ABOUT </h5> 
        </div> 
        <motion.div 
        className = 'about--details'
        variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false}}
         >
        Every great design begin with an even { ' ' } 
        <span className = 'colored--text' > 
        better story 
        </span> 
        </motion.div> 
        <motion.p 
        className = 'about--desc'
        variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false}}
         >
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I 've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products
        for both business and consumer use.I 'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time. 
        </motion.p> 
        </Wrapper>
    )
}

const Wrapper = styled.div `
  width: 100vw;
  max-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  scroll-snap-align: start;


  .title--container {
    width: auto;
    border: solid 3px var(--outline);
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

  .about--details {
    margin-top: 3rem;
    font-size: 2em;
    width: 90%;
  }

  .colored--text {
    color: var(--primary);
  }

  .about--desc {
    margin-top: 3rem;
    color: var(--outline);
    line-height: 1.5rem;
    width: 90%;
  }

  .about-icon {
    margin-right: 1rem;
    color: var(--primary);
  }

  .about-details {
    margin-top: 3rem;
    font-size: 2em;
  }

  .colored-text {
    color: var(--primary);
  }

  p {
    margin-top: 3rem;
    color: var(--outline);
    line-height: 1.5rem;
  }

  @media only screen and (min-width: 600px) {
    margin-top: 3rem;

    .title--container {
      width: 30%;
    }

    .about--details {
    font-size: 2.5em;
  }

  }

  @media only screen and (min-width: 768px) {
    width: 90vw;
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

export default About