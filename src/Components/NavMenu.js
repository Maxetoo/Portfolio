import React, {useEffect} from 'react'
import styled from 'styled-components'
import { menudata } from '../Data/Data'
import { useSelector, useDispatch } from 'react-redux'
import {closeNavMenu, scrollToSection, setActiveSection} from '../Features/eventReudcer'
import {sections} from '../Features/eventReudcer'
import {motion } from 'framer-motion'


const Menu = () => {
  const dispatch = useDispatch()
  const { navMenuOpen } = useSelector((store) => store.eventSlice)

  useEffect(() => {
    const values = Object.values(sections)
      dispatch(setActiveSection(values.current))
  }, [navMenuOpen]);


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
          return <motion.div 
          className='menu--list' 
          key={id}           
          onClick={() => dispatch(scrollToSection(sections[title]))}>
              <p className="icon">{icon}</p>
              <p className="title">{title}</p>
            </motion.div>
        })}
        {/* <h3 className='socials'>Change Theme</h3>
        <div className="social--container">
          {socials.map((value) => {
            const {id, icon, link, } = value
            return <Link to={link} className='social--link' key={id}>
            i
          </Link>
          })}
        </div> */}
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
      background: rgb(29, 29, 29, 0.5);
     }

     .menu--container {
      width: 70%;
      height: 100%;
      padding: 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--default-font-color);
      background: #111;

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
        opacity: 0.8;
     }

     .menu--list:hover {
      color: var(--primary);
     }

     .icon {
      margin: .5rem 1rem 0 0;
     }

     .social--container {
      margin-top: 1rem;
      width: 90%;
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
      
     }

     .social--link:hover {
      color: var(--primary);

     }

     @media only screen and (min-width: 768px) {
      .blur--bg {
      width: 70%;
     }

     .menu--container {
      width: 30%;

     }
     }

     @media only screen and (min-width: 1200px) {
      .blur--bg {
      width: 70%;
     }

     .menu--container {
      width: 30%;

     }
     }
`
export default Menu