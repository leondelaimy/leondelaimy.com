import React from 'react'
import styled from 'styled-components'
import { Header } from '@components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

const StyledAbout = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100dvh;

  .about-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 10px;
  }

  @media (max-width: 843px) {
    .about-wrapper {
      gap: 2rem;
    }
  }

  a {
    display: inline;
  }

  a.music {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  a.music:hover {
    text-decoration: underline;
    text-underline-position: under;
  }

  p {
    max-width: 410px;
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
    fileName: file(relativePath: { eq: "me.png" }) {
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
    <>
      <StyledAbout id="about">
        <div className="about-wrapper">
          <div>
            <Header />
            <p>
              I&apos;m a software engineer & artist exploring the intersection between music, visual arts, technology &
              science. I&apos;m currently working with{' '}
              <a href="https://knownorigin.io" target="_blank" rel="noreferrer">
                KnownOrigin{' '}
              </a>
              x
              <a href="https://www.ebay.co.uk" target="_blank" rel="noreferrer">
                {' '}
                eBay
              </a>
            </p>
          </div>
          <StyledImage>
            <GatsbyImage image={image} className="img" alt="leon-delaimy" />
          </StyledImage>
        </div>
      </StyledAbout>
    </>
  )
}
