import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'

const MyNameIs = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 10px;
  margin: 0;
`

const Name = styled(Title)`
  padding: 10px;
  margin: 0;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 10px;
  gap: 5rem;

  p {
    padding: 10px;
  }

  .text {
    margin-left: 1rem;
  }
`

export const Header: React.FC = () => {
  return (
    <StyledHeader id="intro">
      <div className="text">
        <MyNameIs headingLevel="h5">Hey, my name is</MyNameIs>
        <Name headingLevel="h2">Leon Delaimy</Name>
      </div>
    </StyledHeader>
  )
}
