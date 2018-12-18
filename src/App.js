import React from 'react';
import { hot } from 'react-hot-loader';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

import logo from 'assets/logo.svg';

const GlobalStyle = createGlobalStyle`${reset};`;

const Wrapper = styled.div`
  font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
  text-align: center;
`;

const Title = styled.h1`font-size: 1.5em;`;
const Intro = styled.p`margin-top: 30px;`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 180px;
  padding: 20px;
  color: white;
  background: #222;
`;

const Logo = styled.img`
  height: 80px;
  animation: logo infinite 20s linear;

  @keyframes logo {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Header>
      <Logo src={logo} alt="logo" />
      <Title>Welcome to React</Title>
    </Header>
    <Intro>
      To get started, edit
      <code> src/App.js </code>
      and save to HMR.
    </Intro>
  </Wrapper>
);

export default hot(module)(App);
