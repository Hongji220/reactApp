import React, { Component } from 'react';

const fetchApi = () =>
  fetch('http://localhost:9002/')
    .then(res => res.ok ? res.json() : Promise.reject('error'))

class App extends Component {
  state = {
    data: null
  };

  componentDidMount = () => {
    fetchApi()
      .then(data => this.setState({ data }))
      .catch(err => console.log(err))
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        {data ? JSON.stringify(data) : 'No data here brp'}
      </div>
    );
  }
}

export default App;
