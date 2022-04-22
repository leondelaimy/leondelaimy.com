import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SEO } from '@components'
import { GlobalStyles, Container, theme } from '@styles'

interface ILayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container id="root">{children}</Container>
      </ThemeProvider>
    </>
  )
}
