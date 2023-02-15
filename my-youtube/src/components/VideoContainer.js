import React, { useEffect, useState } from 'react'
import { YOUTUBE_URL } from '../Constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videosData, setVideoData] = useState([]);

  useEffect(()=> {
    getVidoes();
  },[]);

  async function getVidoes(){
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    setVideoData(json.items);
    console.log(json.items);
  }

  if(videosData.length === 0) return null;


  return (
    <div className='flex flex-wrap'>
          {videosData.map(item => <Link key={item.id} to={"/watch?v="+item.id}><VideoCard info={item}/></Link>)}
    </div>
  )
}

export default VideoContainer