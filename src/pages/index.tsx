import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import { About, Projects, Contact } from '@sections'
import { Layout, Nav, Footer } from '@components'
import { Trail } from '@animations'

const IndexPage: React.FC<PageProps> = () => {
  const isBrowser = typeof window !== 'undefined'
  const [width, setWidth] = useState<number>(isBrowser ? window.innerWidth : 0)

  const handleWindowSizeChange = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 843
  const [menu, setMenuOpen] = useState(isMobile ? false : true)

  return (
    <Layout>
      <Nav menu={menu} setMenuOpen={setMenuOpen} isMobile={isMobile} />
      <Trail open={true}>
        <About />
      </Trail>
      <Projects isMobile={isMobile} />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
