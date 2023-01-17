import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '@styles'
import { Title } from '@components'

const ContactTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  margin: 3rem 0 0 0;
`

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: calc(100vh - 113px);

  p {
    padding: 0 30px 0 30px;
    max-width: 300px;
    text-align: center;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }
`

export const Contact: React.FC = () => {
  return (
    <StyledContact id="contact">
      <ContactTitle headingLevel="h4">Contact me</ContactTitle>
      <p>Have any questions and want to contact me? Ping me an email</p>
      <CVBtn show={true} />
    </StyledContact>
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
