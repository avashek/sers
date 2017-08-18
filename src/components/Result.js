import React, { Component } from 'react';
import ClipBoard from 'clipboard';
//import PropTypes from 'prop-types';

var icons = {
  'git' : 'github',
  'hg' : 'bitbucket',
  'svn' : 'google'
}

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type : '',
      clipboardTarget : '',
      tagClass : '',
    };
  }
  componentDidMount(){
    let type = 'js';
    if(this.props.latest.endsWith('css'))
      type = 'css';
    this.setState({
      type : type,
      tagClass : 'tag tag-'+type,
    });
    new ClipBoard('.btn');
    this.setState({clipboardTarget : '#code'+this.props.ukey})
  }

  static defaultProps = {
    repository : null,
  }

  render() {
    const {name,latest,description,repository} = this.props;
    const {ukey} = this.props;
    return (
          <div className="result">
            <span className='result-head'>
              <label className='name'>{name.split('-').map(word => word[0].toUpperCase()+word.substring(1)).join(' ')}</label>
              <label className={this.state.tagClass}>{this.state.type.toLowerCase()}</label>
              {
                repository? 
                <a href={'https://'+repository['url'].split('://')[1]} target='_blank'><i className={'fa fa-'+icons[repository['type']]}/></a>
                :
                <div></div>
              }
            </span>
            <span className='desc'>{description}</span>
            <span className='input-card'>
              {
                this.state.type === 'css' ?
                <input className='input input-readonly' type='text' id={'code'+ukey} ref={'code'} value={'<link type="text/css" rel="stylesheet" href="'+latest+'"/>'} readOnly/>
                  :
                <input className='input input-readonly' type='text' id={'code'+ukey} ref={'code'} value={'<script type="text/javascript" src="'+latest+'"></script>'} readOnly/>
                }
              <button className='btn btn-clipboard' data-clipboard-target={this.state.clipboardTarget}><i className='fa fa-clipboard'/></button> 
            </span>
          </div>
    );
  }
}


export default Result;
