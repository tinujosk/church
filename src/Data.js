import React from 'react';

class Data extends React.Component {
  state = {
    data: 'This page has some default data set in',
  };

  render() {
    return <h2 style={{ color: 'green' }}>{this.state.data}</h2>;
  }
}

export default Data;
