import React from 'react';

const VideoCard = (props) => {
    const {thumbnails,title} = props.snippet;
    return(
        <div className='videocard'>
            <img src={thumbnails.medium.url}  alt='thumbnail'/>
            <div className='title'>{title}</div>
            <button onClick={() => window.open('https://www.youtube.com/watch?v='+props.id.videoId,'_blank') }>Cast</button>
        </div>
    )
} 

export default VideoCard;