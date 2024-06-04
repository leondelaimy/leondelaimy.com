import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '@styles'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { animated } from '@react-spring/web'
import { useSpring } from '@react-spring/core'
import { Footer, MenuIcon } from '@components'

const routes = [
  {
    name: 'About',
    route: '#about',
  },
  {
    name: 'Projects',
    route: '#projects',
  },
  {
    name: 'Contact',
    route: '#contact',
  },
]

const StyledNav = styled.nav`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 99;

  @media only screen and (max-width: 843px) {
    position: fixed;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    position: fixed;
    width: 100%;
    top: 0;
    overflow: hidden;
  }

  @media only screen and (max-width: 843px) {
    .menu {
      height: 100dvh;
      touch-action: none;
      background-color: ${({ theme }) => theme.background};
    }
`

const StyledButtons = styled(StyledButton)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 843px) {
    display: flex;
    align-items: flex-start;

    .btn-wrapper ul {
      display: flex;
      flex-direction: column;
    }

    .btn-wrapper ul li {
      margin: 30px;
    }
  }

  @media only screen and (min-width: 843px) {
    .btn-wrapper ul {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .btn-wrapper ul li {
      margin: 0;
    }
  }

  .btn-wrapper ul li {
    text-shadow: none;
    border-color: transparent;
  }

  .btn-wrapper ul li::after {
    border-color: transparent;
  }

  .btn-wrapper ul li.active::after {
    border-color: ${({ theme }) => theme.colors.zimaBlue};
  }

  .btn-wrapper ul li.active {
    pointer-events: none;
    color: ${({ theme }) => theme.colors.zimaBlue};
    border-color: ${({ theme }) => theme.colors.zimaBlue};
  }
`

const StyledIcon = styled.div`
  @media only screen and (min-width: 843px) {
    display: none;
  }

  .icon {
    text-align: end;
  }

  svg {
    fill: ${({ theme }) => theme.colors.zimaBlue};
    padding: 10px;
    height: 3rem;
    width: 2.5rem;
    &:hover {
      fill: ${({ theme }) => theme.colors.pastelRed};
    }
  }
`

interface INavProps {
  menu: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  isMobile: boolean
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const Nav: React.FC<INavProps> = ({ menu, setMenuOpen, isMobile, selected, setSelected }) => {
  const menuAnimation = useSpring({
    transform: menu ? `translateY(0)` : `translateY(-100%)`,
    opacity: menu ? 1 : 0,
  })

  const handleNavigation = (
    route: string,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isMobile: boolean
  ) => {
    isMobile && setMenuOpen(false)
    return scrollTo(route)
  }

  return (
    <StyledNav id="nav">
      <StyledIcon>
        <button className="icon" onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </button>
      </StyledIcon>
      <animated.div className="menu" style={menuAnimation}>
        <StyledIcon>
          <button className="icon" onClick={() => setMenuOpen(false)}>
            <MenuIcon />
          </button>
        </StyledIcon>
        <StyledButtons>
          <div className="btn-wrapper">
            <ul>
              {routes.map(({ name, route }, i) => {
                return (
                  <li
                    key={i}
                    tabIndex={i}
                    onClick={() => {
                      setSelected(route)
                      handleNavigation(route, setMenuOpen, isMobile)
                    }}
                    onKeyDown={() => null}
                    role="button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    className={selected === route ? 'active' : ''}
                  >
                    {name}
                  </li>
                )
              })}
            </ul>
          </div>
        </StyledButtons>
        {isMobile && <Footer />}
      </animated.div>
    </StyledNav>
  )
}
