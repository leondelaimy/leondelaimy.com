// Cyberpunk buttons inspired by https://github.com/lampewebdev/cyberpunk-menu

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
    cursor: url('data:image/webp;base64,UklGRroBAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSD4AAAABDzD/ERGCUa3t0B7zTgQZBHBkE0kEUUSwtPPPQ4OI/k8Anw5xVd+tkyB2RWyOXBwZh8Ve+JuAJWGZy138C1ZQOCAAAQAAMAkAnQEqIAAgAAAAACWwAnTNocDen/ir+QHOGbhdncM1/JeYD+Ac5LuAP1V/wH8A9//pAP6B/gPQA9gD0APJ4/YD4AP2Z/0HqlhMSte/ViPBAAD+/5FF//miCCXBI9gsr6IO+St3qefOiG7ie1e2s7V8SIn/s8UhqsgL/+MKIu4wxRlDDoZ3xjtGpnzwjfCyX73aCxvgvB3/26Dxy2Ug///jlgRy+gqBrrPDnp9tjwp7t5dmQKRweJ6wCpBhOeskldJ3fqeEy8ejKCdY7F1jhxsEeQ7jilB70hSNxVx3u3c/+g8vasGPy63e9Z/5a57RH6qHRa4f5/LVvMe/pygAAFBTQUlOAAAAOEJJTQPtAAAAAAAQAEgAAAABAAIASAAAAAEAAjhCSU0EKAAAAAAADAAAAAI/8AAAAAAAADhCSU0EQwAAAAAADlBiZVcBEAAGAGQAAAAA'),
      auto;
  }
`
