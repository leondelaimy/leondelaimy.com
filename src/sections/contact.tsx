import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '@styles'
import { Title } from '@components'

const ContactTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  margin: 3rem 0 0 0;
  padding: 0 30px 0 30px;
`

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: calc(100dvh - 113px);

  p {
    padding: 0 30px 0 30px;
    max-width: 410px;
    line-height: 1.8;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 843px) {
    .btn-wrapper ul {
      margin: 0;
    }
  }
`

interface ContactProps {
  showCV: boolean
}

export const Contact: React.FC<ContactProps> = ({ showCV }) => {
  return (
    <StyledContact id="contact">
      <ContactTitle headingLevel="h4">Contact me</ContactTitle>
      <p>
        Full stack engineering experience with a degree in Biomedical Sciences. If you would like to contact me, ping me
        an email
      </p>
      {showCV ? <CVBtn /> : <GetInTouchBtn />}
    </StyledContact>
  )
}

const GetInTouchBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <a href="mailto:leondel.coding@gmail.com">
            <li>Get in touch</li>
          </a>
        </ul>
      </div>
    </StyledButton>
  )
}

const CVBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <li>CV</li>
          </a>
        </ul>
      </div>
    </StyledButton>
  )
}
