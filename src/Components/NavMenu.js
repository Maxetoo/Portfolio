import React, {useRef} from 'react'
import styled from 'styled-components'
import { menudata, socials} from '../Data/Data'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {closeNavMenu, scrollToSection} from '../Features/eventReudcer'
import {sections} from '../Features/eventReudcer'

const Menu = () => {
  const dispatch = useDispatch()
  const { navMenuOpen } = useSelector((store) => store.eventSlice)
  return (
    <Wrapper style={{
      width: `${navMenuOpen ? '100%' : '0'}`
    }}>
      <div className="overall--container">
        <div className="blur--bg" onClick={() => dispatch(closeNavMenu())}></div>
        <div className="menu--container">
        <h3>Menu</h3>
        {menudata.map((value) => {
          const {id, title, icon} = value
          return <div className='menu--list' key={id} onClick={() => dispatch(scrollToSection(sections[title]))}>
              <p className="icon">{icon}</p>
              <p className="title">{title}</p>
            </div>
        })}
        <h3 className='socials'>Socials</h3>
        <div className="social--container">
          {socials.map((value) => {
            const {id, icon, link, } = value
            return <Link to={link} className='social--link' key={id}>
            {icon}
          </Link>
          })}
        </div>
      </div>
      </div>
      
      
    </Wrapper>
  )
}


const Wrapper = styled.div`
    height: 100vh; 
    width: 0; 
    position: fixed; 
    z-index: 1000;
     top: 0; 
    right: 0;
    overflow: hidden; 
     transition: 0.5s all; 
    

     .overall--container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
     }

     .blur--bg {
      width: 30%;
      height: 100%;
      background: rgb(153, 153, 153, 0.2);
     }

     .menu--container {
      width: 70%;
      height: 100%;
      padding: 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--outline);
      background: #191919;
      /* background: #111;  */

     }

     h3 {
      margin: 0rem 0rem 1rem 0rem;
     }

     .menu--list {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 2rem;
        cursor: pointer;
     }

     .menu--list:hover {
      color: #28e98c;
     }

     .icon {
      margin: .5rem 1rem 0 0;
     }

     .social--container {
      margin-top: 1rem;
      width: 70%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
     }

     .socials {
      margin-top: 3rem;
     }

     .social--link {
      color: var(--outline);
      cursor: pointer;
      font-size: 0.8em;
     }

     .social--link:hover {
      color: #28e98c;

     }
`
export default Menu