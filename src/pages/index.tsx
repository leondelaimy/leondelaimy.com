import React, { useState } from 'react'
import { PageProps } from 'gatsby'
import { Layout, Header, Nav, About, Experience, Contact, Footer } from '@components'

const IndexPage: React.FC<PageProps> = () => {
  const [menu, setMenuOpen] = useState(false)

  return (
    <Layout>
      <Header />
      <Nav menu={menu} setMenuOpen={setMenuOpen} />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
