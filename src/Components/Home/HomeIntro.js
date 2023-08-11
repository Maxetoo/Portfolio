import React from 'react'
import styled from 'styled-components'

const HomeIntro = () => {
  return (
    <Wrapper>
      <img
        src='https://www.bing.com/th?id=OIP.xGBXIxWtk7mObVbJrNgfVwHaHa&w=169&h=185&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2'
        alt=''
        className='profile'
      />
      <p>Hello, My name is Maxwell Etombi</p>
      <h3>
        "I am a software engineer who possesses a passion for crafting elegant
        and high-performance web applications."
      </h3>
      <button type='button'>Learn More</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile {
    width: 100%;
    height: 300px;
    /* border-radius: 20px; */
    background: #ffffff;
    margin-top: 1rem;
    object-fit: contain;
  }

  p {
    margin: 1rem;
    font-size: 0.9em;
    text-decoration: underline;
  }

  h3 {
    width: 80%;
    text-align: center;
    font-size: 2em;
    margin: 1rem;
  }

  button {
    width: 80%;
    height: 50px;
    margin: 1rem;
    border: none;
    background: var(--outline);
    color: var(--default-font-color);
  }
`

export default HomeIntro
