// Site layout inspired by https://github.com/bchiang7/v4

import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import { About, Projects, Contact } from '@sections'
import { Layout, Nav, Footer } from '@components'
import { Trail } from '@animations'
import { CyberRain } from '@sketches'

const IndexPage: React.FC<PageProps> = () => {
  const isBrowser = typeof window !== 'undefined'
  const [width, setWidth] = useState<number>(isBrowser ? window.innerWidth : 0)

  const handleWindowSizeChange = () => {
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
  const [selected, setSelected] = useState<string>('')
  // const [easterEgg, setEasterEgg] = useState(false)

  return (
    <Layout>
      {!isMobile && <CyberRain symbolSize={isMobile ? 10 : 15} highlightSpeed={isMobile ? 1.5 : 2} />}
      <Nav selected={selected} setSelected={setSelected} menu={menu} setMenuOpen={setMenuOpen} isMobile={isMobile} />
      <Trail open={true}>
        <About selected={selected} setSelected={setSelected} />
      </Trail>
      <Projects selected={selected} setSelected={setSelected} isMobile={isMobile} />
      <Contact selected={selected} setSelected={setSelected} showCV={true} />
      <Footer />
    </Layout>
  )
}

export default IndexPage
