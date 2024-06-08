import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'
import { useInView } from 'react-intersection-observer'
import { StyledButton } from '@styles'

const ProjectsTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  padding: 0 30px 0 30px;
  margin: 15px auto;
`

const Leraq = styled(Title)`
  color: ${({ theme }) => theme.colors.pastelRed};
  padding: 0 15px 0 30px;
  margin: 0;
`

const StyledProjects = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100dvh;

  a {
    display: inline;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 843px) {
    .btn-wrapper ul {
      margin: 0;
    }
  }

  .projects-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 10px;
  }

  @media (max-width: 843px) {
    .projects-wrapper {
      gap: 1rem;
    }
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
    padding: 0 30px 0px 30px;
    max-width: 430px;
    line-height: 1.8;
    text-align: justify;
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

interface IProjectsProps {
  isMobile: boolean
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const Projects: React.FC<IProjectsProps> = ({ selected, setSelected, isMobile }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  if (inView && selected !== '#projects') {
    setSelected('#projects')
  }

  return (
    <StyledProjects id="projects" ref={ref}>
      <div className="projects-wrapper">
        <div className="discography">
          <ProjectsTitle headingLevel="h4">Music</ProjectsTitle>
          <Leraq headingLevel="h4">Leraq</Leraq>
          <p>
            Electronic music alias created using a hybrid setup of hardware & software - with drum machines, samplers, &
            synthesizers routed through Ableton Live. Artworks were created using TouchDesigner. Interlinked EP is
            available on vinyl in select
            <a href="http://www.google.com/search?q=leraq+interlinked+vinyl"> record stores</a> with prints also
            available on <a href="https://leraq.bandcamp.com/merch">Bandcamp</a>
            {isMobile && (
              <>
                . Listen at <a href="https://leraq.net">leraq.net</a>
              </>
            )}
          </p>
          {!isMobile && <LeraqButton />}
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

const LeraqButton = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <a href="https://leraq.net">
            <li>Listen</li>
          </a>
        </ul>
      </div>
    </StyledButton>
  )
}
