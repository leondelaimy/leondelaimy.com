import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'
import { StyledButton } from '@styles'

const experience = [
  {
    name: 'Infinity Works',
    position: 'Consultant',
    url: 'https://www.infinityworks.com',
    dates: 'Oct 2021 - Present',
  },
  {
    name: 'Visfo',
    position: 'Software Engineer',
    url: 'https://visformatics.net',
    dates: 'Sep 2018 - Oct 2021',
  },
  {
    name: 'Northcoders',
    position: 'Trainee Full Stack Developer',
    url: 'https://northcoders.com',
    dates: 'Feb 2018 - May 2018',
  },
  {
    name: 'University of Manchester',
    position: 'Biomedical Sciences',
    url: 'https://www.manchester.ac.uk',
    dates: 'Sep 2014 - June 2017',
  },
]

const ExperienceTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const Position = styled(Title)`
  padding: 0 15px 0 30px;
  margin: 0;
  font-weight: normal;
`

const Job = styled(Title)`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.pastelRed};

  @media only screen and (max-width: 992px) {
    padding: 0 15px 0 30px;
  }
`

const StyledExperience = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 750px;

  .experience-wrapper {
    margin: 20px 0 0 0;
  }

  .job {
    display: flex;
    flex-wrap: wrap;
  }

  .date {
    margin: 0 0 30px 0;
  }

  ul {
    list-style-type: '-';
  }

  p {
    padding: 0 30px 0 30px;
    line-height: 1.8;
    margin: 0;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Experience: React.FC = () => {
  return (
    <StyledExperience id="experience">
      <div>
        <ExperienceTitle headingLevel="h4">Experience</ExperienceTitle>
        <div className="experience-wrapper">
          {experience.map((job, i) => {
            return (
              <div key={i}>
                <div className="job">
                  <Position headingLevel="h5">{`${job.position} @ `}</Position>
                  <ExperienceLink name={job.name} url={job.url} />
                </div>
                <div className="date">
                  <p>{job.dates}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <CVBtn show={false} />
    </StyledExperience>
  )
}

interface IExperienceLinkProps {
  name: string
  url: string
}

const ExperienceLink = ({ name, url }: IExperienceLinkProps) => {
  return (
    <Job headingLevel="h5">
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </Job>
  )
}

interface ICVBtnProps {
  show: boolean
}

const CVBtn = ({ show }: ICVBtnProps) => {
  return show ? (
    <>
      <StyledButton primary>
        <div className="btn-wrapper">
          <ul>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <li>CV</li>
            </a>
          </ul>
        </div>
      </StyledButton>
    </>
  ) : null
}
