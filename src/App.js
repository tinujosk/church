import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import axios from 'axios';

import Data from './Data';

const StyledBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const Description = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

class App extends React.Component {
  state = {
    description: null,
  };

  debounce = (func, time) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, time);
    };
  };

  getData = () => {
    axios.get('http://localhost:3001').then(res => {
      this.setState({ description: res.data });
      console.log('hello', res);
    });
  };

  render() {
    const { description } = this.state;
    return (
      <StyledBg>
        <Description>{description}</Description>
        <Button
          variant='contained'
          color='primary'
          onClick={this.debounce(this.getData, 500)}
        >
          Call Node JS
        </Button>
        <Data />
      </StyledBg>
    );
  }
}

export default App;
