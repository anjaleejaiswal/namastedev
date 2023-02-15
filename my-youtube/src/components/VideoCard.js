import React from 'react'
import { user_profile } from '../Constant';

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {localized, thumbnails } = snippet

  return (
    <div className='p-2 m-2 shadow-lg'>
        <img 
            src={thumbnails?.medium?.url}
            alt="videos"
            className=''
        />
        <div className='flex'>
            <img 
                src={user_profile}
                alt="user_profile"
                className='rounded-full h-10 w-12 p-2 mt-2'
            />
            <div className='p-2 mt-2 text-sm w-[17.5rem]'>{localized?.title}</div>
        </div>
        <div className='flex'>
            <div className='text-sm text-gray-500 p-2'>{snippet?.channelTitle}</div>
            <div className='text-sm text-gray-500 p-2'>{statistics?.likeCount} likes</div>
        </div>
    </div>
  )
}

export default VideoCard;