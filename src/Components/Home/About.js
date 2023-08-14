import React from 'react'
import styled from 'styled-components'
import { AiOutlineUser } from 'react-icons/ai'

const About = () => {
    return ( <Wrapper >
        <div className = 'title--container' >
        <AiOutlineUser className = 'title--icon' />
        <h5 className = 'title' > ABOUT </h5> 
        </div> 
        <div className = 'about--details' >
        Every great design begin with an even { ' ' } 
        <span className = 'colored--text' > 
        better story 
        </span> 
        </div> 
        <p className = 'about--desc' >
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I 've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products
        for both business and consumer use.I 'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time. 
        </p> 
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

  .about--details {
    margin-top: 3rem;
    font-size: 2em;
    width: 90%;
  }

  .colored--text {
    color: #28e98c;
  }

  .about--desc {
    margin-top: 3rem;
    color: var(--outline);
    line-height: 1.5rem;
    width: 90%;
  }

  /* .title {
    border: solid 1px var(--outline);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    border-radius: 20px;
    font-size: 0.8em;
    margin-top: 1rem;
  } */

  .about-icon {
    margin-right: 1rem;
    color: #28e98c;
  }

  .about-details {
    margin-top: 3rem;
    font-size: 2em;
  }

  .colored-text {
    color: #28e98c;
  }

  p {
    margin-top: 3rem;
    color: var(--outline);
    line-height: 1.5rem;
  }

  @media only screen and (min-width: 600px) {
    margin-top: 3rem;
    .title {
      width: 20%;
    }
    .about-details {
      font-size: 2.5em;
      margin-top: 5rem;
      line-height: 3rem;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 3rem;

    .title {
      width: 20%;
    }
    .about-details {
      width: 80%;
      font-size: 3em;
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
    }
    /* .intro-details {
      width: 80%;
      font-size: 3.5em;
      margin-top: 5rem;
      line-height: 3.5rem;
    } */
  }
`

export default About