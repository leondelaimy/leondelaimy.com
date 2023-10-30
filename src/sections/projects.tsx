import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'

const releases = [
  {
    name: 'Interlinked',
    url: 'https://leraq.bandcamp.com/album/interlinked',
    year: 'Apr 2023',
  },
  {
    name: 'Unseen Worlds',
    url: 'https://leraq.bandcamp.com/album/unseen-worlds-3',
    year: 'Mar 2021',
  },
  {
    name: 'Mutant',
    url: 'https://leraq.bandcamp.com/album/mutant',
    year: 'Sep 2020',
  },
]

const ProjectsTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const Leraq = styled(Title)`
  padding: 0 15px 0 30px;
  margin: 0;
`

const Discography = styled(Title)`
  padding: 0 0 15px 30px;
  margin: 0;
  font-weight: normal;
`

const Year = styled(Title)`
  padding: 0 15px 0 30px;
  margin: 0;
  font-weight: normal;
`

const Release = styled(Title)`
  padding: 0 0 20px 0;
  margin: 0;
`

const StyledProjects = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);

  .projects-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 10px;
  }

  .discography {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .year {
    display: flex;
    flex-wrap: wrap;
  }

  p {
    padding: 0 30px 15px 30px;
    max-width: 410px;
    line-height: 1.8;
  }
`

const StyledPlayer = styled.div`
  iframe {
    width: 400px;
    height: 400px;
    border: 0;
  }

  @media only screen and (max-width: 843px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    iframe {
      width: 310px;
      height: 310px;
    }
  }
`

interface ProjectsProps {
  isMobile: boolean
}

export const Projects: React.FC<ProjectsProps> = ({ isMobile }) => {
  return (
    <StyledProjects id="projects">
      <div className="projects-wrapper">
        <div className="discography">
          <ProjectsTitle headingLevel="h4">Projects</ProjectsTitle>
          <Leraq headingLevel="h4">
            <a href="https://leraq.net" target="_blank" rel="noreferrer">
              Leraq
            </a>
          </Leraq>
          <p>
            Electronic music alias. Created using a mix of hardware/software drum machines, samplers & synthesizers -
            routed through Ableton Live. Artworks created using TouchDesigner
          </p>
          {!isMobile && (
            <>
              <Discography headingLevel="h6">Discography</Discography>
              {releases.map((release, i) => {
                return (
                  <div key={i}>
                    <div className="year">
                      <div className="release">
                        <Year headingLevel="h6">{release.year}</Year>
                      </div>
                      <ReleaseLink name={release.name} url={release.url} />
                    </div>
                  </div>
                )
              })}
            </>
          )}
        </div>
        <StyledPlayer>
          <iframe
            title="Interlinked"
            src="https://bandcamp.com/EmbeddedPlayer/album=3627805310/size=large/bgcol=333333/linkcol=8dc9f4/minimal=true/transparent=true/"
            seamless
          >
            <a href="https://leraq.bandcamp.com/album/interlinked">Interlinked by Leraq</a>
          </iframe>
        </StyledPlayer>
      </div>
    </StyledProjects>
  )
}

interface IReleaseLinkProps {
  name: string
  url: string
}

const ReleaseLink = ({ name, url }: IReleaseLinkProps) => {
  return (
    <Release headingLevel="h6">
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </Release>
  )
}
