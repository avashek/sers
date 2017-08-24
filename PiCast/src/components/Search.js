import React, { Component } from 'react';

const youtubeurl  = function(query){
  let apikey = 'AIzaSyClHWfMurGrGg89h46VNVIxTDlUWZ3hQCc';
  let max_videos = '10';
  return 'https://www.googleapis.com/youtube/v3/search?order=viewcount&part=snippet&q='+ escape(query) + "&type=video+&videoDefinition=high&key=" + apikey + "&maxResults="+ max_videos;
}

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {value : ''};
    this._onSubmit = this._onSubmit.bind(this);
  }
  _onSubmit(e){
    e.preventDefault();
    console.log(this.state.value);
    fetch(youtubeurl(this.state.value)).then(res => res.json()).then(json => this.props.updateJson(json));;
  }
  render() {
    return (
      <div className="search" onSubmit={this._onSubmit}>
        <form>
          <input type="text" value={this.state.value} onChange={e => this.setState({value : e.target.value})}/>
        </form>
      </div>
    );
  }
}

export default Search;
