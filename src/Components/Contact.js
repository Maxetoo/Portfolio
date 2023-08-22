import React, {useRef} from 'react'
import styled from 'styled-components'
import { BiSolidContact } from 'react-icons/bi'
// BiSolidContact
import { Link } from 'react-router-dom'
import { socials } from '../Data/Data'
import {sections} from '../Features/eventReudcer'
import {useScroll, motion} from 'framer-motion'


const Contact = () => {
  sections.Contact = useRef()
  const textRevealVariant = {
    offscreen: {
      x: -10,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5
      }
    }
  }

  const smallertextRevealVariant = {
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
      <motion.div 
      className = 'title--container' 
      ref={sections.Contact}
      variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      
      >
        <BiSolidContact className = 'title--icon' />
        <h5 className='title'>CONTACT</h5> 
        </motion.div> 
      <motion.div 
      className='contact-details'
      variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      >
        Ready to work <span className='colored-text'>with me ?</span>
      </motion.div>
      <motion.p
      variants={smallertextRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      >SAY HELLO</motion.p>
      <motion.p 
      variants={smallertextRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      >maxeto@gmail.com</motion.p>
      {/* <div className='contact-footer'>
        
      </div> */}
      <motion.div 
      className="social--container"
      variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      >
      {socials.map((value) => {
          const {link, id, icon} = value
          return <Link to={link} className='social--link' key={id}>
          {icon}
        </Link>
        })}
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

  /* margin-top: -4rem; */

  .title--container {
    border: solid 1px var(--outline);
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
  

  .contact-icon {
    margin-right: 1rem;
    color: #28e98c;
  }

  .contact-details {
    margin-top: 3rem;
    font-size: 2em;
  }

  .colored-text {
    color: #28e98c;
  }

  p {
    margin-top: 2rem;
    color: var(--outline);
  }

  .contact-footer {
    width: 100%;
    height: 2px;
    background: var(--outline);
    margin-top: 2rem;
  }

  .social--container {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .social--link {
    margin: 1rem;
    color: white;
    font-size: 1.3em;
  }

  @media only screen and (min-width: 600px) {
    margin-top: 3rem;

.title--container {
  width: 30%;
}

.contact--details {
font-size: 2.5em;
}

  }

  @media only screen and (min-width: 768px) {
    margin-top: 3rem;

    .title {
      width: 20%;
    }
    .contact-details {
      width: 80%;
      margin-top: 5rem;
      line-height: 3rem;
    }

    p {
      line-height: 2rem;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 60%;

    .title {
      width: 25%;
      margin-top: 5rem;
    }
  }
`
export default Contact
