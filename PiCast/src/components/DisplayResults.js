import React,{Component} from 'react';
import VideoCard from './VideoCard'

class DisplayResults extends Component{
    static defaultProps = {
        ...Component.defaultProps,
        items : [],
    }
    constructor(props){
        super(props);
        this.state = {
            result : false
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.items){
            this.setState({result : true});
        }
    }
    render(){
        return(
            <div className="results">
                {
                    this.state.result ? 
                   this.props.items.map((item,i)=> <VideoCard key={i} {...item}/>)
                   : ''
                }
            </div>
        )
    }
}

export default DisplayResults;