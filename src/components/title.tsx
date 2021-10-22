import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.div`
  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-size: 1.25rem;
    }

    h6 {
      font-size: 1rem;
    }
  }
`
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

export const Title = ({ headingLevel = 'p', children, className }: HeadingProps): JSX.Element => {
  const TsHeading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children)

  return (
    <StyledHeading>
      <TsHeading className={className}>{children}</TsHeading>
    </StyledHeading>
  )
}
