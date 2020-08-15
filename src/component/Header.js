import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo.svg'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #02101f;
  padding: 10px 100px;

  align-items: center;
`

const StyledNavLink = styled(NavLink)`
  color: white;
  margin-left: 20px;

  &:hover, &.active{
    color: blueviolet;
    text-decoration: none;
  }
`

const StyledImg = styled.img`
  height: 30px;
`

export default function Component() {
  return (
    <StyledHeader>
      {/* header */}
      <StyledImg src={logo}></StyledImg>
      <nav>
        <StyledNavLink exact to="/" activeClassName='active'>首页</StyledNavLink>
        <StyledNavLink to="/history" activeClassName='active'>历史</StyledNavLink>
        <StyledNavLink to="/about" activeClassName='active'>关于我</StyledNavLink>
      </nav>
    </StyledHeader>
  )
}