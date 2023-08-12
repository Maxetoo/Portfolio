import React from 'react'
import styled from 'styled-components'
import { HiMenuAlt4 } from 'react-icons/hi'
import { socials } from '../../Data/Data'
import { Link } from 'react-router-dom'
import { FiArrowDownRight } from 'react-icons/fi'
// FiArrowDownRight

const data = [1, 2, 3, 4]

const HomeProfile = () => {
  return (
    <Wrapper>
      {/* <div className='menu-container'>
        <HiMenuAlt4 />
      </div> */}
      <div className='profile-head'>
        <h3 className='profile-name'>Maxwell.</h3>
        {/* <p>Website Developer</p> */}
        <div className='menu-container'>
          <HiMenuAlt4 />
        </div>
      </div>
      <img
        src='https://images.unsplash.com/photo-1458681407517-f6a21aad9ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        alt=''
        className='profile'
      />
      <div className='profile-details'>
        I am a software engineer who possesses a passion for crafting elegant
        and high-performance web applications.
      </div>
      <div className='socials-container'>
        {socials.map((value) => {
          const { id, icon, link } = value
          return (
            <Link to={link} className='social-link' key={id}>
              {icon}
            </Link>
          )
        })}
      </div>
      <button type='button'>
        Learn More
        <FiArrowDownRight className='learnmore-icon' />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* border: solid 1px white; */
  /* margin-top: 1.5rem; */
  width: 95vw;
  height: 100vh;
  height: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: solid 0.5px var(--outline);
  margin-top: 1.5rem;
  /* margin-top: 1.5rem;
  border-top: solid 1px var(--outline); */
  /* border-bottom: solid 1px var(--outline); */
  /* border-top: solid 1px var(--outline);
  border-bottom: solid 1px var(--outline);
  margin-top: 2rem; */

  .profile-head {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .menu-container {
    position: fixed;
    z-index: 200;
    top: 5%;
    left: 80%;
    display: grid;
    place-content: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #28e98c;
    border: solid 1px black;
    color: #000000;
    /* color: white; */
  }

  .profile-name {
    font-family: 'Borel', cursive;
    font-size: 2em;
  }

  .profile {
    height: 200px;
    width: 80%;
    border-radius: 10px;
    background: #000000;
    margin: 1rem;
    object-fit: cover;
  }

  .profile-details {
    width: 80%;
    text-align: center;
    font-size: 1.3em;
    margin: 1rem;
  }

  .socials-container {
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }

  .social-link {
    border: solid 2px var(--outline);
    color: var(--outline);
    text-decoration: none;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    margin: 0.5rem;
  }

  button {
    width: 90%;
    height: 50px;
    border: none;
    border-radius: 20px;
    margin: 1rem;
    cursor: pointer;
    background: #28e98c;
    color: #000000;
    font-size: 1.1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .learnmore-icon {
      margin-left: 0.5rem;
    }
  }

  @media only screen and (min-width: 768px) {
    max-width: 90vw;
    border: solid 0.5px var(--outline);
    margin: 1rem;
  }

  @media only screen and (min-width: 992px) {
    width: 60%;

    .menu-container {
      left: 85%;
    }
  }
`

export default HomeProfile
