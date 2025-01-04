import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, Error } from '@components'
import { MatrixRain } from '@sketches'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <MatrixRain />
      <Error />
    </Layout>
  )
}

export default NotFoundPage
