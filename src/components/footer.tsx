import React from 'react'
import styled from 'styled-components'
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@icons'

const StyledFooter = styled.footer`
  margin: 0 auto;
  text-align: center;

  .icons {
    display: flex;
    justify-content: center;
    gap: 40px;
  }

  .copyright {
    font-size: 0.8rem;
    opacity: 0.8;
    padding: 3px;
  }

  .copyright span {
    color: ${({ theme }) => theme.colors.pastelRed};
  }

  .copyright a {
    display: inline;
    &:hover {
      cursor: crosshair;
    }
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

interface IFooterProps {
  setEasterEgg?: React.Dispatch<React.SetStateAction<boolean>>
}

export const Footer: React.FC<IFooterProps> = ({ setEasterEgg }) => {
  return (
    <StyledFooter>
      <div className="icons">
        <StyledIcon>
          <a href="https://github.com/leondelaimy" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a href="https://www.instagram.com/leon.delaimy" target="_blank" rel="noreferrer">
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
        All rights reserved &copy;{' '}
        {setEasterEgg ? (
          <a // eslint-disable-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus, jsx-a11y/anchor-is-valid
            role="button"
            onClick={() => setEasterEgg(true)}
          >
            Leon Delaimy
          </a>
        ) : (
          <span>Leon Delaimy</span>
        )}
      </p>
    </StyledFooter>
  )
}
