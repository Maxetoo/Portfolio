import React from 'react'
import styled from 'styled-components'
import { AiOutlineUser, AiOutlineEye } from 'react-icons/ai'
import { projects } from '../../Data/Data'
import { Link } from 'react-router-dom'
// AiOutlineEye

const Projects = () => {
  return (
    <Wrapper>
      <div className='title'>
        <AiOutlineUser className='project-icon' />
        PROJECTS
      </div>
      <div className='project-container'>
        {/* <div className='selected-project'>
          <div className='details-head'>
            <h3>Name</h3>
            <h4>Tech used</h4>
            <p>Desc</p>
          </div>
          <div className='details-footer'>view</div>
        </div> */}
        {projects.map((value) => {
          const { id, name, description, link, techUsed } = value
          return (
            <div className='selected-project' key={id}>
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
  height: auto;
  padding: 2rem;

  .title {
    border: solid 1px var(--outline);
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 20px;
    font-size: 0.8em;
    margin-top: 1rem;
  }

  .project-icon {
    margin-right: 1rem;
    color: #28e98c;
  }

  .project-container {
    width: 100%;
    height: auto;
    margin-top: 5rem;
  }

  .selected-project {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 3rem;
    padding: 2rem;
    background: #1a1a1c;
    border-radius: 20px;
    border: solid 1px var(--outline);
  }

  .details-head {
    width: 100%;
  }

  h4 {
    margin-top: 1rem;
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
