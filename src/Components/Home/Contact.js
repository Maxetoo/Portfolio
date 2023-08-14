import React from 'react'
import styled from 'styled-components'
import { BiSolidContact } from 'react-icons/bi'
// BiSolidContact
import { Link } from 'react-router-dom'
import { socials } from '../../Data/Data'

const Contact = () => {
  return (
    <Wrapper>
      <div className = 'title--container' >
        <BiSolidContact className = 'title--icon' />
        <h5 className='title'>CONTACT</h5> 
        </div> 
      <div className='contact-details'>
        Ready to work <span className='colored-text'>with me ?</span>
      </div>
      <p>SAY HELLO</p>
      <p>maxeto@gmail.com</p>
      {/* <div className='contact-footer'>
        
      </div> */}
      <div className="social--container">
      {socials.map((value) => {
          const {link, id, icon} = value
          return <Link to={link} className='social--link' key={id}>
          {icon}
        </Link>
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
