import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  constructor(){
    super();
    this.state ={
      count: 0
    }
  }
  componentDidMount(){
    console.log('appComponentDidMount');
  }
  handleProps(){
    this.setState({
      count: 666,
    })
  }
  render() {
    console.log('appRender');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.handleProps()}>点击改变子组件的 props</button>
        </header>
        <Counter count={this.state.count}/>
      </div>
    );
  }
}

export default App;
