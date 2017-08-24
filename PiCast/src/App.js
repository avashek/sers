import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import DisplayResults from './components/DisplayResults';
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      json : null,
    }
    this.updateJson = this.updateJson.bind(this);
  }
  updateJson(json){
    this.setState({
      json : json
    })
  }
  render() {
    const {json} = this.state;
    return (
      <div className="App">
        <Header />
        <div className='content'>
          <Search updateJson={this.updateJson}/>
          <DisplayResults {...json}/>
        </div>
      </div>
    );
  }
}

export default App;
