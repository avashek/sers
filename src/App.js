import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import Results from './components/Results';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      results : null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
  }
  searchQuery(query){
    this.setState({results : null});
    fetch('https://api.cdnjs.com/libraries?search='+query+'&fields=description,version,repository')
        .then(res => res.json())
        .then(json => this.setState({
          results : json,
        }));
  }
  handleSubmit(value){
    
    if(value.length > 3){
     this.searchQuery(value);
    }
  }
  render() {
    return (
      <div className="App">
       <SearchBox handleSubmit={this.handleSubmit}/>
       <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
