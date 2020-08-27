import React from 'react';
import Logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from "antd";

const Div = styled.nav`
  background-color: rgb(33,44,61);
  padding: 18px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const StyledNL = styled(NavLink)`
  margin-left: 15px;
  text-decoration: none;
  color: rgb(99, 125, 162);

  &:hover, &.active {
    color: white;
  }
`;
const DivAuth = styled.div`
  margin-left: auto;
`;

export default function() {
  return (
    <Div>
      <Nav>
        <img src={Logo} style={{height:"40px"}} alt="here is a logo.."></img>
        <StyledNL activeclassname="active" exact to='/'>首页</StyledNL>
        <StyledNL activeclassname="active" to='/history'>历史</StyledNL>
        <StyledNL activeclassname="active" to='/about'>关于我</StyledNL>

      <DivAuth className="auth">
        <Button ghost href={'/login'}>登录</Button>
        <Button ghost style={{marginLeft:"15px"}} href={'/register'}>注册</Button>
      </DivAuth>
      </Nav>
    </Div>
  )
}