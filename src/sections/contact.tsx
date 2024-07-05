import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '@styles'
import { Title } from '@components'
import { useInView } from 'react-intersection-observer'

const ContactTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.zimaBlue};
  margin: 3rem 0 0 0;
  padding: 0 30px 0 30px;
`

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: calc(100dvh - 113px);

  a {
    display: inline;
  }

  p {
    padding: 0 30px 0 30px;
    max-width: 430px;
    line-height: 1.8;
    text-align: justify;
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
`

interface IContactProps {
  showCV: boolean
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const Contact: React.FC<IContactProps> = ({ selected, setSelected, showCV }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  })

  if (inView && selected !== '#contact') {
    setSelected('#contact')
  }

  return (
    <StyledContact id="contact" ref={ref}>
      <ContactTitle headingLevel="h4">Get in touch</ContactTitle>
      <p>
        Full stack software engineering experience with a background in Biomedical Sciences & a passion for sound
        design, interactive installations, creative coding & generative art. For enquiries, contact me at{' '}
        <a href="mailto:leondel.coding@gmail.com">leondel.coding@gmail.com</a>
      </p>
      {showCV ? <CVBtn /> : <GetInTouchBtn />}
    </StyledContact>
  )
}

const GetInTouchBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <a href="mailto:leondel.coding@gmail.com">
            <li>Get in touch</li>
          </a>
        </ul>
      </div>
    </StyledButton>
  )
}

const CVBtn = () => {
  return (
    <StyledButton primary>
      <div className="btn-wrapper">
        <ul>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <li>CV</li>
          </a>
        </ul>
      </div>
    </StyledButton>
  )
}
