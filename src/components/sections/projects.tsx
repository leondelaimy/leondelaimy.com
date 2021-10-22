import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

const ProjectsTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const B2B = styled(Title)`
  padding: 0 30px 0 30px;
  margin: 0;
`

const StyledProjects = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;

  .projects-wrapper {
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
    border: 30px solid ${({ theme }) => theme.colors.zimaBlue};
    border-left: 5px solid ${({ theme }) => theme.colors.zimaBlue};
    border-right: 5px solid ${({ theme }) => theme.colors.zimaBlue};
    border-bottom: 15px solid ${({ theme }) => theme.colors.zimaBlue};
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
    fileName: file(relativePath: { eq: "b2b-icon.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Projects: React.FC = () => {
  const data = useStaticQuery(query)
  const image = getImage(data.fileName) as IGatsbyImageData
  return (
    <StyledProjects id="projects">
      <div className="projects-wrapper">
        <StyledImage>
          <GatsbyImage image={image} className="img" alt="b2b" />
        </StyledImage>
        <div>
          <ProjectsTitle headingLevel="h4">Projects</ProjectsTitle>
          <B2BLink />
          <p>
            <b>Share tracks with friends</b>
          </p>
          <p>Full stack web application with React frontend, Golang API & PostgreSQL database</p>
        </div>
      </div>
    </StyledProjects>
  )
}

const B2BLink = () => {
  return (
    <B2B headingLevel="h5">
      <a href="https://b2b-testing-95cff.web.app" target="_blank" rel="noreferrer">
        B2B
      </a>
    </B2B>
  )
}
