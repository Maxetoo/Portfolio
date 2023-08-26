import React, {useRef} from 'react'
import styled from 'styled-components'
// BiBookAlt
import { BiBookAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { articles } from '../Data/Data'
import { FiArrowUpRight } from 'react-icons/fi'
import {sections} from '../Features/eventReudcer'
import {useScroll, motion } from 'framer-motion'

// FiArrowUpRight

const Articles = () => {
  sections.Articles = useRef()

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
      y: 0,
      staggerChildren: 0.5,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }
  return (
    <Wrapper>
      <motion.div 
      className = 'title--container' 
      ref={sections.Articles}
      variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
       >
        <BiBookAlt className = 'title--icon' />
        <h5 className='title'>ARTICLES</h5> 
        </motion.div> 
      <motion.div 
      className='articles--details'
      variants={textRevealVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      >
        My <span className='colored-text'>Articles</span>
      </motion.div>
      <div className='article--container'>
        {articles.map((value, index) => {
          const { id, title, description, readTime, link, date } = value
          return (
            <motion.div 
            className='article' 
            key={id}
            variants={containerReveal}
            initial={
              {
                y: 20,
              }
            }
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            >
              <div className='article--head'>
                <div className='head--left'>
                  <h4 className='article--title'>{title}</h4>
                  <p className='date'>{date}</p>
                </div>
                <Link to={link} className='article-link'>
                  <FiArrowUpRight />
                </Link>
              </div>
              <div className='article--footer'>
                <h4 className='details'>{description}</h4>
                <p className='read-time'>
                  <BiBookAlt className='time-icon' />
                  {readTime}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
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
    /* border: solid 1px var(--outline); */
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

  

  .articles-icon {
    margin-right: 1rem;
    color: var(--primary)
  }

  .articles--details {
    margin-top: 3rem;
    font-size: 2em;
  }

  .colored-text {
    color: var(--primary)
  }

  .article--container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .article {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 3rem;
    padding: 2rem;
    background: none;
    /* border-radius: 20px; */
    border-radius: 2rem;
    border: solid var(--secondary-border) var(--outline);
  }

  .article:hover {
    border-color: var(--primary);
    cursor: pointer;
    transition: .5s all;

    .article-link {
      color: var(--primary);
    }
  }

  .article--head {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .article--title {
    font-size: 1.2em;
  }

  .article-link {
    font-size: 2em;
    color: #ffffff;
  }

  .date {
    margin-top: 1rem;
    font-size: 0.8em;
    color: var(--outline);
  }

  .details {
    margin-bottom: 1rem;
    font-size: 1em;
    opacity: 0.8;
    line-height: 1.5rem;
  }

  .read-time {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--outline);
    font-size: 0.8em;
  }

  .time-icon {
    margin-right: 0.5rem;
    color: var(--primary);
  }

  @media only screen and (min-width: 600px) {
     
    margin-top: 3rem;

    .title--container {
      width: 30%;
    }

    .article--details {
    font-size: 2.5em;
    }

    .article--container {
      display: grid;
    grid-template-columns: auto auto;
    }

    .article {
      height: 300px;
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
export default Articles
