import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circle = styled(Link)`
  height: 80px;
  width: 200px;
  background-color: #a73c3c;
  color: #fff;
  position fixed;
  bottom: 40px;
  right:40px;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #b86262;
  }
`
