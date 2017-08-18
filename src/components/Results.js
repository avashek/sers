import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      resultText : 'Search your cdnjs library',
    };
  }
  componentWillReceiveProps(){
    if(this.state.resultText !== null)
      this.setState({resultText:null});
  }
  render() {
    const {results} = this.props;
    const {resultText} = this.state;
    return (
      <div className="results">
        { 
          results ? 
          results['results'].map((res,i) => <Result key={i} ukey={i} {...res}/>) : 
          <div className='loading'>
            {
              resultText !== null ? 
              <label className='welcome-text'>{resultText}</label> : 
              <label><i className="fa fa-spinner fa-spin fa-2x"/></label>
            }
            </div>
        }
      </div>
    );
  }
}

export default Results;
