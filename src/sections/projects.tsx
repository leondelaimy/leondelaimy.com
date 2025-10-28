import React from 'react'
import styled from 'styled-components'
import { Title } from '@components'
import { useInView } from 'react-intersection-observer'
import { StyledButton } from '@styles'
import SpringOS from '../videos/SpringOS.mp4'

const ProjectsTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  margin: 3rem 0 0 0;
  padding: 0 30px 0 30px;
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

  .react-multiple-carousel__arrow {
    background: none;
    border: none;
    width: auto !important;
    height: auto !important;
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

const StyledVideo = styled.div`
  .video-square {
    aspect-ratio: 1 / 1;
  }
  video {
    width: 400px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
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

  @media only screen and (max-width: 843px) {
    video {
      width: 300px;
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
    <div id="projects" ref={ref}>
      <StyledProjects>
        <div>
          <div className="projects-wrapper">
            <div className="discography">
              <ProjectsTitle headingLevel="h4">113 Spring</ProjectsTitle>
              <p>
                113 Spring is a living space built on an adaptive design system that merges flexible architecture with
                integrated technology. Spatial Intelligence - powered by{' '}
                <a href="https://field.io/work/113-spring-springos-spatial-intelligence">SpringOS</a> - creates a
                responsive environment that senses, learns, and adapts in real time
                {isMobile && (
                  <>
                    . Find out more at <a href="https://field.io/work/113-spring-living-destination">FIELD.IO</a>
                  </>
                )}
              </p>
              {!isMobile && <SpringButton />}
            </div>
            <StyledPlayer>
              <StyledVideo>
                <div className="video-square">
                  <video src={SpringOS} muted playsInline autoPlay preload="auto" loop />
                </div>
              </StyledVideo>
            </StyledPlayer>
          </div>
        </div>
      </StyledProjects>
      <StyledProjects>
        <div>
          <div className="projects-wrapper">
            <div className="discography">
              <ProjectsTitle headingLevel="h4">Leraq</ProjectsTitle>
              <p>
                Electronic music alias created using a hybrid setup of hardware & software - with drum machines,
                samplers, & synthesizers routed through Ableton Live. Artworks were created using TouchDesigner.
                Interlinked EP is available on vinyl in
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
        </div>
      </StyledProjects>
    </div>
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

const SpringButton = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <a href="https://field.io/work/113-spring-living-destination">
            <li>Find out more</li>
          </a>
        </ul>
      </div>
    </StyledButton>
  )
}
