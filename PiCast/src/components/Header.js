import React,{Component} from 'react';
import logo from '../logo.svg';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className='header'>
                <img src={logo} height='25px' />
                <label>PiCast</label>
            </div>
        )
    }
}

export default Header;