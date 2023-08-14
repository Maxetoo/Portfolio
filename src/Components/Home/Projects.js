import React from 'react'
import styled from 'styled-components'
import { AiOutlineUser, AiOutlineEye } from 'react-icons/ai'
import { projects } from '../../Data/Data'
import { Link } from 'react-router-dom'
// AiOutlineEye

const Projects = () => {
  return (
    <Wrapper>
      <div className = 'title--container' >
        <AiOutlineUser className = 'title--icon' />
        <h5 className='title'>PROJECTS</h5> 
        </div> 
        <div className ='project--details' >
        Featured { ' ' } 
        <span className = 'colored--text' > 
        Projects
        </span> 
        </div> 
      <div className='project--container'>
        {projects.map((value) => {
          const { id, name, description, link, techUsed } = value
          return (
            <div className='selected--project' key={id}>
              <div className='details-head'>
                <h3>{name}</h3>
                <h4>{techUsed}</h4>
                <p>{description}</p>
              </div>
              <div className='details-footer'>
                <Link to={link} className='project-link'>
                  <AiOutlineEye className='project-view' />
                  view
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100vw;
min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title--container {
    width: auto;
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
  .project--details {
    margin-top: 3rem;
    font-size: 2em;
    width: 90%;
  }

  .colored--text {
    color: #28e98c;
  }

  .project--container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .project-icon {
    margin-right: 1rem;
    color: #28e98c;
  }

  .project--container {
    width: 100%;
    height: auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .selected--project {
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 3rem;
    padding: 1.5rem;
    background: none;
    border-radius: 20px;
    border: solid 0.5px var(--outline);
  }

  .details-head {
    width: 100%;
  }

  h4 {
    margin-top: 1rem;
    opacity: 0.8;
  }

  p {
    margin-top: 1rem;
    color: var(--outline);
    line-height: 1.5rem;
  }

  .project-link {
    text-decoration: none;
    color: var(--outline);
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .project-view {
    margin-right: 0.5rem;
    color: #28e98c;
  }

  @media only screen and (min-width: 600px) {
    margin-top: 3rem;

    .title {
      width: 30%;
    }

    h3 {
      font-size: 1.3em;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 3rem;

    .title {
      width: 20%;
    }
    p {
      line-height: 2rem;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 60%;

    .title {
      width: 25%;
    }
  }
`

export default Projects
