import React, { useState } from 'react'
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

  .copied {
    color: ${({ theme }) => theme.colors.zimaBlue};
    transition: opacity 0.4s ease;
  }
`

interface IContactProps {
  showCV: boolean
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const Contact: React.FC<IContactProps> = ({ selected, setSelected, showCV }) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  })

  if (inView && selected !== '#contact') {
    setSelected('#contact')
  }

  return (
    <StyledContact id="contact" ref={ref}>
      <ContactTitle headingLevel="h4">Get in touch</ContactTitle>
      <p>
        Full stack software engineering experience with a background in Biomedical Sciences & a passion for sound
        design, interactive installations, creative coding & generative art. For enquiries, contact me at <CopyEmail />
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

const CopyEmail: React.FC<{ email?: string }> = ({ email = 'leondel.coding@gmail.com' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // reset after 2s
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <span>
      {copied ? (
        <span className="copied">email copied to clipboard</span>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" onClick={handleCopy}>
          {email}
        </a>
      )}
    </span>
  )
}
