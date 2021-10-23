import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Title } from '@components'
import { StyledButton } from '@styles'

const ErrorTitle = styled(Title)`
  margin: 0;
  text-align: center;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }

  p {
    text-align: center;
  }
`

export const Error: React.FC = () => {
  return (
    <StyledHeader>
      <ErrorTitle headingLevel="h3">Page not found</ErrorTitle>
      <p>Sorry, this page does not exist.</p>
      <GoBackBtn />
    </StyledHeader>
  )
}

const GoBackBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <Link to="/">
            <li>Go back</li>
          </Link>
        </ul>
      </div>
    </StyledButton>
  )
}
