import React from 'react'
import styled from 'styled-components'
import { BiSolidContact } from 'react-icons/bi'
// BiSolidContact
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <Wrapper>
      <div className='title'>
        <BiSolidContact className='contact-icon' />
        CONTACT
      </div>
      <div className='contact-details'>
        Ready to work <span className='colored-text'>with me ?</span>
      </div>
      <p>SAY HELLO</p>
      <p>maxeto@gmail.com</p>
      <div className='contact-footer'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  padding: 2rem;

  .title {
    border: solid 1px var(--outline);
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 20px;
    font-size: 0.8em;
    margin-top: 1rem;
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

  @media only screen and (min-width: 600px) {
    margin-top: 3rem;

    .title {
      width: 25%;
    }

    .contact-details {
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
