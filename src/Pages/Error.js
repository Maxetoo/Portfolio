import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Error = () => {
  
  return <Wrapper>
    <h1>404 Error!</h1>
    <p>You seem to be lost</p>
    <Link to='/'>
    <button type='button'>Back Home</button>
    </Link>
  </Wrapper>
}


const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4em;
  }

  p {
    opacity: 0.8;
    margin: 2rem;
    font-size: 1.5em;
  }

  button {
    width: 350px;
    height: 50px;
    margin: 1rem;
    background: var(--primary);
    border: none;
    cursor: pointer;
    border-radius: 30px;
    font-size: 1.2em;
  }

  button:hover {
    transition: 0.5s all;
    background: none;
    border: solid 1px var(--primary);
    color: var(--primary);
  }


`

export default Error
