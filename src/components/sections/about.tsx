import React from 'react'
import styled from 'styled-components'
import { Title, Image } from '@components'

const AboutTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const StyledAbout = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;

  .about-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  a {
    display: inline;
  }

  a.music {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  a.music:hover {
    text-decoration: underline;
    text-underline-position: under;
  }

  p {
    max-width: 300px;
    padding: 0 30px 0 30px;
    line-height: 1.8;
  }
`

export const About: React.FC = () => {
  return (
    <StyledAbout id="about">
      <div className="about-wrapper">
        <div>
          <AboutTitle headingLevel="h4">About me</AboutTitle>
          <p>
            Software engineer based in Manchester UK, passionate about{' '}
            <a className="music" href="https://leraq.net" target="_blank" rel="noreferrer">
              music
            </a>
            , science and tech. I&apos;m currently working as a consultant with{' '}
            <a href="https://www.infinityworks.com" target="_blank" rel="noreferrer">
              Infinity Works
            </a>
          </p>
        </div>
        <Image />
      </div>
    </StyledAbout>
  )
}
