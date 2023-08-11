import React from 'react'
import styled from 'styled-components'
import { AiOutlineHome } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { SiBookmeter } from 'react-icons/si'
// AiOutlineHome
// MdWorkOutline
// SiBookmeter

const Introduction = () => {
  return (
    <Wrapper>
      <div className='title'>
        <AiOutlineHome className='intro-icon' />
        INTRODCTION
      </div>
      <div className='intro-details'>
        Hello, my name is Maxwell Etombi and I am{' '}
        <span className='colored-text'>Web Developer</span>
      </div>
      <p>
        I bring beautiful websites to live through by essentric skills. Just
        simple like that! Over two years of experince building and creating web
        products
      </p>
      <div className='experince-meter'>
        <SiBookmeter className='meter-icon' />
        Over 2+ years of Experince
      </div>
      <div className='projects-done'>
        <MdWorkOutline className='meter-icon' />
        50+ projects completed
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;

  .title {
    border: solid 1px var(--outline);
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 20px;
    font-size: 0.8em;
    margin-top: 1rem;
  }

  .intro-icon {
    margin-right: 1rem;
    color: #28e98c;
  }

  .intro-details {
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

  .experince-meter {
    height: 100px;
    width: 100%;
    border-radius: 20px;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background: #343639; */
    background: #1a1a1c;
    font-size: 1.2em;
    /* border: solid 1px #28e98c; */
    border: solid 1px var(--outline);
  }

  .projects-done {
    height: 100px;
    width: 100%;
    border-radius: 20px;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #343639;
    font-size: 1.2em;

    border: solid 1px var(--outline);
  }

  .meter-icon {
    margin-right: 1rem;
  }

  @media only screen and (min-width: 600px) {
    margin-top: 3rem;

    .title {
      width: 30%;
    }
    .intro-details {
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
    .intro-details {
      width: 80%;
      font-size: 3em;
      margin-top: 5rem;
      line-height: 3rem;
    }

    p {
      line-height: 2rem;
    }

    .experince-meter {
      height: 120px;
    }

    .projects-done {
      height: 120px;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 60%;

    .title {
      width: 25%;
    }
    .intro-details {
      width: 80%;
      font-size: 3.5em;
      margin-top: 5rem;
      line-height: 3.5rem;
    }
  }
`

export default Introduction
