import React from 'react'
import styled from 'styled-components'
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@components'

const StyledFooter = styled.footer`
  margin: 0 auto;
  text-align: center;

  .icons {
    display: flex;
    justify-content: center;
    gap: 40px;
  }

  .copyright {
    font-size: 14px;
    opacity: 0.8;
    padding: 3px;
  }

  .copyright span {
    color: ${({ theme }) => theme.colors.pastelRed};
  }
`
const StyledIcon = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.zimaBlue};
    padding: 5px;
    height: 2.5rem;
    width: 2rem;
    &:hover {
      fill: ${({ theme }) => theme.colors.pastelRed};
    }
  }
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="icons">
        <StyledIcon>
          <a href="https://github.com/leondelaimy" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a href="https://www.instagram.com/leondelaimy" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a href="https://www.linkedin.com/in/leondelaimy" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </StyledIcon>
      </div>
      <p className="copyright">
        All rights reserved &copy; <span>Leon Delaimy</span>
      </p>
    </StyledFooter>
  )
}
