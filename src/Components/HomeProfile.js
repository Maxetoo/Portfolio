import React, {useRef} from 'react'
import styled from 'styled-components'
import { HiMenuAlt4 } from 'react-icons/hi'
import { socials } from '../Data/Data'
import { Link } from 'react-router-dom'
import { FiArrowDownRight } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import {openNavMenu, sections, scrollToSection} from '../Features/eventReudcer'
import ProfileImg from '../Assets/Maxwell.jpg'

// FiArrowDownRight
// AiFillSetting

const HomeProfile = () => {
  const dispatch = useDispatch()
  sections.Home = useRef()


  return (
    <Wrapper>
      <div className='profile-container' ref={sections.Home}>
        <div className='profile--head'>
          <div className='profile--name'>Maxwell.</div>
          <div className='menu--container' onClick={() => dispatch(openNavMenu())}>
            <HiMenuAlt4 />
          </div>
        </div>
        <img src={ProfileImg}
          alt='profile'
          className='profile--img'/>
          
        <div className='profile--info'>
          <a href="mailto:etombimaxwell123@gmail.com" className='mail-link'>
          <h4 className='profile--email'>etombimaxwell123@gmail.com</h4>
          </a>
          
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
        <button type='button' onClick={() => dispatch(scrollToSection(sections.Projects))}>
          View Works
          <FiArrowDownRight className='learnmore--icon' />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile-container {
    height: auto;
    width: 100%;
    border: solid var(--home-profile-border) var(--outline);
    margin-top: 1.5rem;
    border-radius: 30px;
    background: var(--containerbg);
    /* border-left: solid 1.5px var(--primary);
    border-top: solid 1.5px var(--primary); */
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
    object-position: calc(bottom - 1rem);
    border: solid 1px var(--outline);
    background-image: url('../Assets/Maxwell.jpg');
  }

  .profile--info {
    margin: 1rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mail-link {
    color: var(--outline);
    text-decoration: none;
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
    border: solid 1px var(--outline);
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
    color: var(--primary);
    border-color: var(--primary);
  }

  button {
    width: 90%;
    height: 50px;
    border: none;
    border-radius: 20px;
    margin-top: 1.5rem;
    cursor: pointer;
    background: var(--primary);
    color: #000000;
    font-size: 1.1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .learnmore--icon {
      margin-left: 0.5rem;
    }
  }

  button:hover {
    border: solid 1px var(--primary);
    color: var(--primary);
    background: none;
    transition: .5s all;
  }

  @media only screen and (min-width: 768px) {
    .profile-container {
      width: 75vw;
    }

    .menu--container {
      top: 10%;
      left: 90%;
    }
  }

  @media only screen and (min-width: 992px) {
    .profile-container {
      width: 70vw;
    }
    .profile--img {
    height: 220px;
    }
    

   
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    height: 100%;

    .profile-container {
      width: 100%;
      height: 90%;
    }

    .menu--container {
      top: 10%;
      left: 90%;
    }
  }
    
  
`

export default HomeProfile
