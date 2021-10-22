import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

const AboutTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const StyledAbout = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;

  .about-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  p {
    max-width: 300px;
    padding: 0 30px 0 30px;
    line-height: 1.8;
  }
`

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

export const About: React.FC = () => {
  const data = useStaticQuery(query)
  const image = getImage(data.fileName) as IGatsbyImageData
  return (
    <StyledAbout id="about">
      <div className="about-wrapper">
        <div>
          <AboutTitle headingLevel="h4">About me</AboutTitle>
          <p>
            I&apos;m a software engineer based in Manchester, passionate about science and tech. I&apos;m currently
            working as a consultant with
            <a href="https://www.infinityworks.com" target="_blank" rel="noreferrer">
              Infinity Works
            </a>
          </p>
        </div>
        <StyledImage>
          <GatsbyImage image={image} className="img" alt="leon-delaimy" />
        </StyledImage>
      </div>
    </StyledAbout>
  )
}
