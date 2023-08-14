import React from 'react'
import styled from 'styled-components'
import { HiMenuAlt4 } from 'react-icons/hi'
import { socials } from '../../Data/Data'
import { Link } from 'react-router-dom'
import { FiArrowDownRight } from 'react-icons/fi'
// FiArrowDownRight

const HomeProfile = () => {
  return (
    <Wrapper>
      <div className='profile-container'>
        <div className='profile--head'>
          <div className='profile--name'>Maxwell.</div>
          <div className='menu--container'>
            <HiMenuAlt4 />
          </div>
        </div>
        <img
          src='https://images.unsplash.com/photo-1458681407517-f6a21aad9ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
          alt='profile'
          className='profile--img'
        />
        <div className='profile--info'>
          <h4 className='profile--email'>etombimaxwell@gmail.com</h4>
          <h4 className='profile--title'>Website Developer</h4>
        </div>
        <div className='social--container'>
          {socials.map((value) => {
            const { id, icon, link } = value
            return (
              <Link to={link} className='social--link' key={id}>
                {icon}
              </Link>
            )
          })}
        </div>
        <button type='button'>
          Learn More
          <FiArrowDownRight className='learnmore--icon' />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile-container {
    height: auto;
    width: 100%;
    /* border: solid 0.5px var(--outline); */
    margin-top: 1.5rem;
    border-radius: 30px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile--head {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .profile--name {
    font-family: 'Borel', cursive;
    font-size: 1.5em;
  }

  .menu--container {
    position: fixed;
    z-index: 200;
    top: 6%;
    left: 80%;
    display: grid;
    place-content: center;
    height: 55px;
    width: 55px;
    border-radius: 50%;
    background: #181818;
    border: solid 1px var(--outline);
    /* color: var(--outline); */
    color: #ffff;
    font-size: 1.5em;
    cursor: pointer;
  }

  .profile--img {
    height: 250px;
    width: 80%;
    border-radius: 10px;
    background: #000000;
    margin: 2rem;
    object-fit: cover;
  }

  .profile--info {
    margin: 1rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile--email {
    font-size: 1em;
    color: var(--outline);
  }

  .profile--title {
    font-size: 1.5em;
    margin-top: 0.5rem;
  }

  .social--container {
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .social--link {
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

  .social--link:hover {
    color: #28e98c;
    border-color: #28e98c;
  }

  button {
    width: 90%;
    height: 50px;
    border: none;
    border-radius: 20px;
    margin-top: 1.5rem;
    cursor: pointer;
    background: #28e98c;
    color: #000000;
    font-size: 1.1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    .learnmore--icon {
      margin-left: 0.5rem;
    }
  }

  button:hover {
    border: solid 1px #28e98c;
    color: #28e98c;
    background: none;
    transition: .5s all;
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
