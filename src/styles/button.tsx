import styled from 'styled-components'

export const StyledButton = styled.div<{ primary?: boolean }>`
  * {
    box-sizing: border-box;
  }

  .btn-wrapper ul {
    list-style-type: none;
    padding: 0px;
  }

  .btn-wrapper ul li {
    text-align: center;
    cursor: pointer;
    position: relative;
    padding: 10px;
    margin: 30px 0;
    overflow: hidden;
    width: 350px;
    height: 54.5px;
    clip-path: polygon(100% 0%, 100% 53%, 92% 104.5%, 0% 104.5%, 0% 0%);
    font-size: 26px;
    color: ${({ primary, theme }) => (primary ? theme.colors.pastelRed : theme.colors.lightGrey)};
    border-style: solid;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.pastelRed};
    transition: all 1s ease-out;
  }

  .btn-wrapper ul li::after {
    content: '';
    position: absolute;
    bottom: -17px;
    right: -17px;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.pastelRed};
    transition: all 1s ease-out;
  }

  .btn-wrapper ul li:hover::after,
  .btn-wrapper ul li:hover {
    color: ${({ theme }) => theme.colors.zimaBlue};
    border-color: ${({ theme }) => theme.colors.zimaBlue};
    transition: all 0.23s linear;
  }
`
