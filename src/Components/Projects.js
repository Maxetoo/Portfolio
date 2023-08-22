import React, {useRef} from 'react'
import styled from 'styled-components'
import { AiOutlineUser, AiOutlineEye } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'

import { projects } from '../Data/Data'
import { Link } from 'react-router-dom'
import {sections} from '../Features/eventReudcer'
import {useScroll, motion, useTransform} from 'framer-motion'


// AiOutlineEye

const Projects = () => {
  sections.Projects = useRef()
  const containerRef = useRef()
  const { scrollY } = useScroll({
    target: containerRef
  })

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
        duration: 0.5,
        when: 'beforeChildren'
      }
    }
  }


  const containerReveal = {
    hidden: {
      x: -20,
    },
    visible: {
      x: 0,
      staggerChildren: 0.5,
      transition: {
        type: 'spring',
        stiffness: 90
      }
    }
  }

  return (
    <Wrapper 
    >
      <motion.div 
      className = 'title--container' 
      ref={sections.Projects}
      variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      >
        <MdWorkOutline className = 'title--icon' />
        <h5 className='title'>PROJECTS</h5> 
        </motion.div > 
        <motion.div 
        className ='project--details'
        variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
         >
        Featured { ' ' } 
        <span className = 'colored--text' > 
        Projects
        </span> 
        </motion.div> 
      <motion.div className='project--container'
      variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      >
        {projects.map((value, index) => {
          const { id, name, description, link, techUsed } = value
          return (
            <motion.div 
            className='selected--project' 
            key={id}
            ref={containerRef}
            variants={containerReveal}
            initial={
              {
                x: index % 2 !== 0 ? 40 : -40,
              }
            }
            whileInView="visible"
            viewport={{ once: false, amount: 0.1}}
            >
              <div className='details-head'>
                <h3>{name}</h3>
                <h4>{techUsed}</h4>
                <p>{description}</p>
              </div>
              <div className='details-footer'>
                <Link to={link} className='project-link'>
                  <AiOutlineEye className='project-view' />
                  view
                </Link>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100vw;
min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  scroll-snap-align: start;


  .title--container {
    width: auto;
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
  .project--details {
    margin-top: 3rem;
    font-size: 2em;
    width: 90%;
  }

  .colored--text {
    color: #28e98c;
  }

  .project--container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .project-icon {
    margin-right: 1rem;
    color: #28e98c;
  }

  .project--container {
    width: 100%;
    height: auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .selected--project {
    width: 90%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 3rem;
    padding: 1.5rem;
    background: none;
    border-radius: 20px;
    border: solid 0.5px var(--outline);
  }

  .selected--project:hover {
    border-color: #28e98c;
    cursor: pointer;
    transition: .5s all;
  }

  .details-head {
    width: 100%;
  }

  h4 {
    margin-top: 1rem;
    opacity: 0.8;
  }

  p {
    margin-top: 1rem;
    color: var(--outline);
    line-height: 1.5rem;
  }

  .project-link {
    text-decoration: none;
    color: var(--outline);
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .project-view {
    margin-right: 0.5rem;
    color: #28e98c;
  }

  @media only screen and (min-width: 600px) {
    
    margin-top: 3rem;

.title--container {
  width: 30%;
}

.project--details {
font-size: 2.5em;
}

.project--container {
  display: grid;
grid-template-columns: auto auto;
/* grid-template-rows: repeat(5, 1fr); */
}

.selected--project {
  height: 300px;
}
  }

  @media only screen and (min-width: 768px) {
    margin-top: 3rem;

    .title {
      width: 20%;
    }
    p {
      line-height: 2rem;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 60%;

    .title {
      width: 25%;
    }
  }
`

export default Projects
