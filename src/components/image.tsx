import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

const StyledImage = styled.div`
  .img {
    border: 30px solid ${({ theme }) => theme.colors.pastelRed};
    border-left: 5px solid ${({ theme }) => theme.colors.pastelRed};
    border-right: 5px solid ${({ theme }) => theme.colors.pastelRed};
    border-bottom: 15px solid ${({ theme }) => theme.colors.pastelRed};
    clip-path: polygon(
      0px 25px,
      26px 0px,
      calc(60% - 25px) 0px,
      60% 25px,
      100% 25px,
      100% calc(100% - 10px),
      calc(100% - 15px) calc(100% - 10px),
      calc(80% - 10px) calc(100% - 10px),
      calc(80% - 15px) calc(100% - 0px),
      10px calc(100% - 0px),
      0% calc(100% - 10px)
    );
    background-color: ${({ theme }) => theme.background};
  }
`

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Image: React.FC = () => {
  const data = useStaticQuery(query)
  const image = getImage(data.fileName) as IGatsbyImageData
  return (
    <>
      <StyledImage>
        <GatsbyImage image={image} className="img" alt="leon-delaimy" />
      </StyledImage>
    </>
  )
}
