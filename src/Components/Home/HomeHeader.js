import React from 'react'
import styled from 'styled-components'
// import { IoMailOutline } from 'react-icons/io'
import { GoMail } from 'react-icons/go'
import { HiMenuAlt4 } from 'react-icons/hi'
// IoMailOutline
// HiMenuAlt4
// GoMail

const HomeHeader = () => {
  return (
    <Wrapper>
      <div className='header--left'>
        <div className='mail-container'>
          <GoMail />
        </div>
        <h4>Get in touch</h4>
      </div>
      <div className='header--right'>
        <HiMenuAlt4 className='menu--icon' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: solid 1px var(--outline);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .header--left {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }

  .mail-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    background: var(--outline);
  }

  h4 {
    margin-left: 1rem;
  }

  .menu--icon {
    font-size: 1.5em;
    cursor: pointer;
  }
`

export default HomeHeader
