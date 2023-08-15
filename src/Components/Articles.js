import React from 'react'
import styled from 'styled-components'
// BiBookAlt
import { BiBookAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { articles } from '../Data/Data'
import { FiArrowUpRight } from 'react-icons/fi'
// FiArrowUpRight

const Articles = () => {
  return (
    <Wrapper>
      <div className = 'title--container' >
        <BiBookAlt className = 'title--icon' />
        <h5 className='title'>ARTICLES</h5> 
        </div> 
      <div className='articles--details'>
        My <span className='colored-text'>Articles</span>
      </div>
      <div className='article--container'>
        {articles.map((value) => {
          const { id, title, description, readTime, link, date } = value
          return (
            <div className='article' key={id}>
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
            </div>
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
  /* margin-top: -4rem; */

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

  

  .articles-icon {
    margin-right: 1rem;
    color: #28e98c;
  }

  .articles--details {
    margin-top: 3rem;
    font-size: 2em;
  }

  .colored-text {
    color: #28e98c;
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
    border-radius: 20px;
    border: solid 0.5px var(--outline);
  }

  .article:hover {
    border-color: #28e98c;
    cursor: pointer;
    transition: .5s all;

    .article-link {
      color: #28e98c;
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
    color: #28e98c;
  }

  @media only screen and (min-width: 600px) {
    /* margin-top: 3rem;

    .title {
      width: 30%;
    }

    .articles-details {
      font-size: 2.5em;
      margin-top: 5rem;
      line-height: 3rem;
    }

    .article-container {
      margin-top: 2rem;
    } */

     
    margin-top: 3rem;

.title--container {
  width: 30%;
}

.article--details {
font-size: 2.5em;
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
      margin-top: 5rem;
    }
  }
`
export default Articles